/* Sahl App — PWA Install Manager v3 — FIXED
   ✅ Chrome / Edge / Opera / Brave / Samsung Internet
   ✅ Safari iOS  (step-by-step modal)
   ✅ Safari macOS
   ✅ Firefox Android
   ✅ Netlify: https://sahleducation.netlify.app/
*/
(function () {
  'use strict';

  var SKIP_KEY  = 'sahl_pwa_skip';
  var SKIP_DAYS = 3;
  var DELAY_MS  = 3200;   /* after splash (3 s) */
  var deferred  = null;   /* holds BeforeInstallPromptEvent */
  var bannerShown = false;

  /* ── DOM refs ── */
  var banner     = document.getElementById('pwa-banner');
  var installBtn = document.getElementById('pwa-install-btn');
  var dismissBtn = document.getElementById('pwa-dismiss-btn');
  var iosModal   = document.getElementById('pwa-ios-modal');
  var iosClose   = document.getElementById('pwa-ios-close');
  var updToast   = document.getElementById('pwa-update-toast');
  var updBtn     = document.getElementById('pwa-update-btn');
  var updX       = document.getElementById('pwa-update-x');

  /* ════════════════════════════════
     HELPERS
  ════════════════════════════════ */
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
    return t ? (Date.now() - Number(t)) < SKIP_DAYS * 86400000 : false;
  }
  function show(el) { if (el) el.classList.add('show'); }
  function hide(el) { if (el) el.classList.remove('show'); }

  /* ════════════════════════════════
     SERVICE WORKER
  ════════════════════════════════ */
  function registerSW() {
    if (!('serviceWorker' in navigator)) return;
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(function (reg) {
        console.log('[PWA] SW registered, scope:', reg.scope);
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
      .catch(function (err) { console.warn('[PWA] SW registration failed:', err); });
  }

  /* ════════════════════════════════
     UPDATE TOAST
  ════════════════════════════════ */
  function showUpdateToast(worker) {
    show(updToast);
    if (updBtn) updBtn.addEventListener('click', function () {
      worker.postMessage('SKIP_WAITING');
      hide(updToast);
      setTimeout(function () { location.reload(); }, 300);
    }, { once: true });
    if (updX) updX.addEventListener('click', function () {
      hide(updToast);
    }, { once: true });
  }

  /* ════════════════════════════════
     SHOW BANNER
  ════════════════════════════════ */
  function showBanner() {
    if (bannerShown) return;
    if (isInstalled()) return;
    bannerShown = true;
    show(banner);
    console.log('[PWA] Banner shown, deferred =', deferred ? 'YES' : 'NO');
  }

  /* ════════════════════════════════
     INIT UI — called on load
  ════════════════════════════════ */
  function initUI() {
    console.log('[PWA] initUI — installed:', isInstalled(),
                '| skipped:', skippedRecently(),
                '| Safari:', isSafari(),
                '| iOS:', isIOS());

    /* Already a standalone PWA → hide */
    if (isInstalled()) {
      if (banner) banner.classList.add('pwa-hidden');
      return;
    }

    /* ── Safari (iOS + macOS) — always show guide ── */
    if (isSafari()) {
      if (installBtn) {
        installBtn.innerHTML = '<i class="fas fa-share-from-square"></i><span>Comment installer</span>';
      }
      /* Show even if skipped recently — Safari has no native prompt */
      setTimeout(showBanner, DELAY_MS);
      return;
    }

    /* ── Chromium browsers ──
       If beforeinstallprompt already fired, show now.
       Otherwise wait a bit then show fallback. */
    if (!skippedRecently()) {
      setTimeout(function () {
        showBanner();
      }, DELAY_MS);
    }
  }

  /* ════════════════════════════════
     beforeinstallprompt
     Chrome / Edge / Samsung / Opera / Brave
  ════════════════════════════════ */
  window.addEventListener('beforeinstallprompt', function (e) {
    /* CRITICAL: prevent the mini-infobar */
    e.preventDefault();
    deferred = e;
    console.log('[PWA] beforeinstallprompt captured ✅');

    /* Clear any old skip so the banner shows */
    if (skippedRecently()) {
      /* still allow the button to work even if banner was dismissed */
    }

    /* Show banner after splash */
    setTimeout(showBanner, DELAY_MS);
  });

  /* ════════════════════════════════
     INSTALL BUTTON CLICK
  ════════════════════════════════ */
  if (installBtn) {
    installBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('[PWA] Install button clicked, deferred =', deferred ? 'YES' : 'NO');

      /* ── iOS / Safari path → show modal ── */
      if (isSafari() || isIOS()) {
        hide(banner);
        show(iosModal);
        return;
      }

      /* ── Chromium path → trigger native prompt ── */
      if (deferred) {
        deferred.prompt();
        deferred.userChoice
          .then(function (choice) {
            console.log('[PWA] User choice:', choice.outcome);
            if (choice.outcome === 'accepted') {
              installBtn.innerHTML = '<i class="fas fa-check"></i><span>Installé !</span>';
              installBtn.classList.add('done');
              setTimeout(function () { hide(banner); }, 2000);
            } else {
              /* User dismissed native prompt — remember for 3 days */
              localStorage.setItem(SKIP_KEY, String(Date.now()));
            }
            deferred = null;
          })
          .catch(function (err) {
            console.warn('[PWA] prompt() error:', err);
            deferred = null;
          });
        return;
      }

      /* ── Fallback: deferred never fired (Firefox, older browsers) ──
         Show instructions */
      var browser = navigator.userAgent;
      var msg = 'Pour installer Sahl App :\n\n';
      if (/samsung/i.test(browser)) {
        msg += '1. Menu ⋮ → "Ajouter page à" → "Écran d\'accueil"';
      } else if (/firefox/i.test(browser)) {
        msg += '1. Menu ⋮ → "Installer"\n   ou\n1. Menu ⋮ → "Ajouter à l\'écran d\'accueil"';
      } else {
        msg += '1. Menu du navigateur (⋮ ou ···)\n2. "Installer l\'application"\n   ou "Ajouter à l\'écran d\'accueil"';
      }
      alert(msg);
    });
  }

  /* ════════════════════════════════
     DISMISS BANNER
  ════════════════════════════════ */
  if (dismissBtn) {
    dismissBtn.addEventListener('click', function () {
      hide(banner);
      bannerShown = false;
      localStorage.setItem(SKIP_KEY, String(Date.now()));
      console.log('[PWA] Banner dismissed');
    });
  }

  /* ════════════════════════════════
     iOS MODAL CLOSE
  ════════════════════════════════ */
  if (iosClose) {
    iosClose.addEventListener('click', function () {
      hide(iosModal);
      localStorage.setItem(SKIP_KEY, String(Date.now()));
    });
  }
  if (iosModal) {
    iosModal.addEventListener('click', function (e) {
      if (e.target === iosModal) {
        hide(iosModal);
        localStorage.setItem(SKIP_KEY, String(Date.now()));
      }
    });
  }

  /* ════════════════════════════════
     appinstalled event
  ════════════════════════════════ */
  window.addEventListener('appinstalled', function () {
    console.log('[PWA] ✅ App successfully installed!');
    hide(banner);
    hide(iosModal);
    deferred = null;
    bannerShown = false;
  });

  /* ════════════════════════════════
     RESET: expose debug helper in console
     Open DevTools > Console and type: pwaReset()
  ════════════════════════════════ */
  window.pwaReset = function () {
    localStorage.removeItem(SKIP_KEY);
    bannerShown = false;
    console.log('[PWA] Reset done — reload the page');
    location.reload();
  };

  /* ════════════════════════════════
     BOOT
  ════════════════════════════════ */
  registerSW();
  if (document.readyState === 'complete') {
    initUI();
  } else {
    window.addEventListener('load', initUI);
  }

}());
