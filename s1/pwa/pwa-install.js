/* ═══════════════════════════════════════════════════════════════
   Sahl App · PWA Install Manager — FINAL
   
   WHY THE BUTTON DID NOTHING BEFORE:
   • beforeinstallprompt fires VERY early (during HTML parsing)
   • This script loads at bottom of <body> — too late
   • The event was already gone, deferred = null, click = nothing
   
   THE FIX:
   • An inline <script> at the TOP of <head> captures the event
     into window.__pwaPrompt BEFORE anything else loads
   • This script reads window.__pwaPrompt — always available
   
   ✅ Chrome · Edge · Samsung Internet · Opera · Brave → native prompt
   ✅ Safari iOS  → step-by-step modal
   ✅ Safari macOS → step-by-step modal
   ✅ Firefox     → browser menu instructions
   ✅ Opens https://sahleducation.netlify.app/ when launched
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var SKIP_KEY  = 'sahl_pwa_skip';
  var SKIP_DAYS = 3;
  var DELAY_MS  = 3300; /* splash screen takes 3 s */

  /* ── DOM refs ── */
  var banner     = document.getElementById('pwa-banner');
  var installBtn = document.getElementById('pwa-install-btn');
  var dismissBtn = document.getElementById('pwa-dismiss-btn');
  var iosModal   = document.getElementById('pwa-ios-modal');
  var iosClose   = document.getElementById('pwa-ios-close');
  var updToast   = document.getElementById('pwa-update-toast');
  var updBtn     = document.getElementById('pwa-update-btn');
  var updX       = document.getElementById('pwa-update-x');

  /* ════════════════════════════════════
     HELPERS
  ════════════════════════════════════ */
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

  /* ════════════════════════════════════
     SERVICE WORKER — registered at /sw.js (Netlify root)
  ════════════════════════════════════ */
  function registerSW() {
    if (!('serviceWorker' in navigator)) {
      console.log('[PWA] Service Workers not supported');
      return;
    }
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(function (reg) {
        console.log('[PWA] ✅ SW registered, scope:', reg.scope);

        /* Detect new version */
        reg.addEventListener('updatefound', function () {
          var w = reg.installing;
          if (!w) return;
          w.addEventListener('statechange', function () {
            if (w.state === 'installed' && navigator.serviceWorker.controller) {
              showUpdateToast(w);
            }
          });
        });

        /* Poll for updates every 30 min */
        setInterval(function () { reg.update(); }, 1800000);
      })
      .catch(function (err) {
        console.warn('[PWA] SW registration failed:', err);
      });
  }

  /* ════════════════════════════════════
     UPDATE TOAST
  ════════════════════════════════════ */
  function showUpdateToast(worker) {
    show(updToast);
    if (updBtn) {
      updBtn.addEventListener('click', function () {
        worker.postMessage('SKIP_WAITING');
        hide(updToast);
        setTimeout(function () { location.reload(); }, 400);
      }, { once: true });
    }
    if (updX) {
      updX.addEventListener('click', function () {
        hide(updToast);
      }, { once: true });
    }
  }

  /* ════════════════════════════════════
     TRIGGER NATIVE INSTALL PROMPT
     Reads window.__pwaPrompt set by inline script in <head>
  ════════════════════════════════════ */
  function triggerNativeInstall() {
    var prompt = window.__pwaPrompt;
    if (!prompt) {
      console.warn('[PWA] No prompt available (window.__pwaPrompt is null)');
      return false;
    }

    console.log('[PWA] Calling prompt()…');
    try {
      prompt.prompt();
    } catch (e) {
      console.warn('[PWA] prompt() threw:', e);
      window.__pwaPrompt = null;
      return false;
    }

    prompt.userChoice
      .then(function (choice) {
        console.log('[PWA] User chose:', choice.outcome);
        if (choice.outcome === 'accepted') {
          if (installBtn) {
            installBtn.innerHTML = '<i class="fas fa-check"></i><span>Installé !</span>';
            installBtn.classList.add('done');
          }
          setTimeout(function () { hide(banner); }, 2200);
        } else {
          /* User said no — remember for SKIP_DAYS */
          localStorage.setItem(SKIP_KEY, String(Date.now()));
        }
        window.__pwaPrompt = null;
      })
      .catch(function (err) {
        console.warn('[PWA] userChoice error:', err);
        window.__pwaPrompt = null;
      });

    return true;
  }

  /* ════════════════════════════════════
     INSTALL BUTTON CLICK
  ════════════════════════════════════ */
  if (installBtn) {
    installBtn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('[PWA] Install button clicked');
      console.log('[PWA] prompt available:', !!window.__pwaPrompt);
      console.log('[PWA] isSafari:', isSafari(), '| isIOS:', isIOS());

      /* Safari / iOS — always show manual guide (no native API) */
      if (isSafari() || isIOS()) {
        hide(banner);
        show(iosModal);
        return;
      }

      /* Chrome / Edge / Samsung / Opera — native install dialog */
      var triggered = triggerNativeInstall();

      /* Fallback when native prompt unavailable (Firefox etc.) */
      if (!triggered) {
        var ua = navigator.userAgent;
        var msg = 'Pour installer Sahl App :\n\n';
        if (/samsungbrowser/i.test(ua)) {
          msg += '1. Menu ⋮ en bas\n2. "Ajouter page à"\n3. "Écran d\'accueil"';
        } else if (/firefox/i.test(ua)) {
          msg += '1. Menu ⋮\n2. "Installer" ou "Ajouter à l\'écran d\'accueil"';
        } else {
          msg += '1. Menu du navigateur (⋮ ou ···)\n2. "Installer l\'application"\n   ou "Ajouter à l\'écran d\'accueil"';
        }
        alert(msg);
      }
    });
  }

  /* ════════════════════════════════════
     ALSO LISTEN for late beforeinstallprompt
     (in case it fires after this script loads)
  ════════════════════════════════════ */
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    window.__pwaPrompt = e;
    console.log('[PWA] beforeinstallprompt (late capture)');
    /* Show banner if not already shown */
    if (!isInstalled() && !skippedRecently()) {
      show(banner);
    }
  });

  /* ════════════════════════════════════
     SHOW BANNER after splash
  ════════════════════════════════════ */
  function showBannerAfterSplash() {
    if (isInstalled()) {
      banner && banner.classList.add('pwa-hidden');
      return;
    }

    /* Safari always shows (no native prompt available) */
    if (isSafari() || isIOS()) {
      if (installBtn) {
        installBtn.innerHTML = '<i class="fas fa-share-from-square"></i><span>Comment installer</span>';
      }
      setTimeout(function () { show(banner); }, DELAY_MS);
      return;
    }

    /* Chromium — show if not skipped */
    if (!skippedRecently()) {
      setTimeout(function () {
        if (!isInstalled()) show(banner);
      }, DELAY_MS);
    }
  }

  /* ════════════════════════════════════
     DISMISS BANNER
  ════════════════════════════════════ */
  if (dismissBtn) {
    dismissBtn.addEventListener('click', function () {
      hide(banner);
      localStorage.setItem(SKIP_KEY, String(Date.now()));
    });
  }

  /* ════════════════════════════════════
     iOS MODAL CLOSE
  ════════════════════════════════════ */
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

  /* ════════════════════════════════════
     APP INSTALLED
  ════════════════════════════════════ */
  window.addEventListener('appinstalled', function () {
    console.log('[PWA] ✅ App installed!');
    hide(banner);
    hide(iosModal);
    window.__pwaPrompt = null;
  });

  /* ════════════════════════════════════
     CONSOLE DEBUG HELPERS
     Open browser console and type:
       pwaDebug()  — show status
       pwaReset()  — clear skip, reload
  ════════════════════════════════════ */
  window.pwaDebug = function () {
    console.log('═══ PWA Debug ═══');
    console.log('prompt ready :', !!window.__pwaPrompt);
    console.log('installed    :', isInstalled());
    console.log('iOS          :', isIOS());
    console.log('Safari       :', isSafari());
    console.log('skipped      :', skippedRecently());
    console.log('SW active    :', !!(navigator.serviceWorker && navigator.serviceWorker.controller));
  };
  window.pwaReset = function () {
    localStorage.removeItem(SKIP_KEY);
    window.__pwaPrompt = null;
    console.log('[PWA] Reset done — reloading…');
    location.reload();
  };

  /* ════════════════════════════════════
     BOOT
  ════════════════════════════════════ */
  registerSW();
  if (document.readyState === 'complete') {
    showBannerAfterSplash();
  } else {
    window.addEventListener('load', showBannerAfterSplash);
  }

}());
