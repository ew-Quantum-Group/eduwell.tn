/* Sahl App — PWA Install Manager
   ✅ Chrome / Edge / Opera / Brave / Samsung Internet
   ✅ Safari iOS (step-by-step modal)
   ✅ Safari macOS
   ✅ Firefox Android
*/
(function () {
  'use strict';

  var SKIP_KEY  = 'sahl_pwa_skip';
  var SKIP_DAYS = 3;
  var DELAY_MS  = 3000; /* wait for splash to finish */
  var deferred  = null;

  var banner     = document.getElementById('pwa-banner');
  var installBtn = document.getElementById('pwa-install-btn');
  var dismissBtn = document.getElementById('pwa-dismiss-btn');
  var iosModal   = document.getElementById('pwa-ios-modal');
  var iosClose   = document.getElementById('pwa-ios-close');
  var updToast   = document.getElementById('pwa-update-toast');
  var updBtn     = document.getElementById('pwa-update-btn');
  var updX       = document.getElementById('pwa-update-x');

  /* ── Helpers ── */
  function isInstalled() {
    return window.matchMedia('(display-mode: standalone)').matches
      || window.matchMedia('(display-mode: minimal-ui)').matches
      || navigator.standalone === true;
  }
  function isIOS() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent)
      || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }
  function isSafari() {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  }
  function skippedRecently() {
    var t = localStorage.getItem(SKIP_KEY);
    return t && (Date.now() - +t) < SKIP_DAYS * 86400000;
  }
  function show(el)  { el && el.classList.add('show'); }
  function hide(el)  { el && el.classList.remove('show'); }

  /* ── Service Worker registration ── */
  function registerSW() {
    if (!('serviceWorker' in navigator)) return;
    /* sw.js must be at the root of the site */
    var swPath = location.pathname.replace(/\/login\/.*$/, '/') + 'sw.js';
    navigator.serviceWorker.register(swPath)
      .then(function (reg) {
        reg.addEventListener('updatefound', function () {
          var w = reg.installing;
          if (!w) return;
          w.addEventListener('statechange', function () {
            if (w.state === 'installed' && navigator.serviceWorker.controller) {
              showUpdateToast(w);
            }
          });
        });
        setInterval(function () { reg.update(); }, 1800000);
      })
      .catch(function (e) { console.warn('[PWA] SW error:', e); });
  }

  /* ── Update toast ── */
  function showUpdateToast(worker) {
    show(updToast);
    updBtn && updBtn.addEventListener('click', function () {
      worker.postMessage('SKIP_WAITING');
      hide(updToast);
      location.reload();
    }, { once: true });
    updX && updX.addEventListener('click', function () {
      hide(updToast);
    }, { once: true });
  }

  /* ── Decide which install UI to show ── */
  function initUI() {
    if (isInstalled()) {
      banner && banner.classList.add('pwa-hidden');
      return;
    }
    if (skippedRecently()) return;

    /* iOS / macOS Safari — manual guide */
    if (isSafari()) {
      installBtn.innerHTML = '<i class="fas fa-share-from-square"></i><span>Comment installer</span>';
      installBtn.onclick = function (e) {
        e.preventDefault();
        hide(banner);
        show(iosModal);
      };
      setTimeout(function () { show(banner); }, DELAY_MS);
      return;
    }

    /* Chromium: wait for beforeinstallprompt; show fallback if it never fires */
    setTimeout(function () {
      if (!deferred && !isInstalled()) {
        installBtn.innerHTML = '<i class="fas fa-download"></i><span>Installer</span>';
        show(banner);
      }
    }, DELAY_MS + 1500);
  }

  /* ── beforeinstallprompt (Chrome / Edge / Samsung / Opera / Brave) ── */
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    if (!skippedRecently() && !isInstalled()) {
      installBtn.innerHTML = '<i class="fas fa-download"></i><span>Installer</span>';
      setTimeout(function () { show(banner); }, DELAY_MS);
    }
  });

  /* ── Install button ── */
  installBtn && installBtn.addEventListener('click', function () {
    if (!deferred) return; /* iOS handled above */
    deferred.prompt();
    deferred.userChoice.then(function (r) {
      if (r.outcome === 'accepted') {
        installBtn.innerHTML = '<i class="fas fa-check"></i><span>Installé !</span>';
        installBtn.classList.add('done');
        setTimeout(function () { hide(banner); }, 1800);
      } else {
        localStorage.setItem(SKIP_KEY, Date.now());
      }
      deferred = null;
    });
  });

  /* ── Dismiss ── */
  dismissBtn && dismissBtn.addEventListener('click', function () {
    hide(banner);
    localStorage.setItem(SKIP_KEY, Date.now());
  });

  /* ── iOS modal close ── */
  iosClose && iosClose.addEventListener('click', function () {
    hide(iosModal);
    localStorage.setItem(SKIP_KEY, Date.now());
  });
  iosModal && iosModal.addEventListener('click', function (e) {
    if (e.target === iosModal) {
      hide(iosModal);
      localStorage.setItem(SKIP_KEY, Date.now());
    }
  });

  /* ── appinstalled ── */
  window.addEventListener('appinstalled', function () {
    hide(banner); hide(iosModal); deferred = null;
  });

  /* ── Boot ── */
  registerSW();
  if (document.readyState === 'complete') initUI();
  else window.addEventListener('load', initUI);

}());
