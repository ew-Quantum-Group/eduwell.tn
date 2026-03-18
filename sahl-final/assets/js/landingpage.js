/* =============================================
   Sahl — Landing Page JS
   =============================================
   1. Intro animation
   2. Sheet open/close
   3. PWA install (real native dialog on Chrome/Edge/Samsung)
   ============================================= */

/* ── 1. Intro animation ── */
const intro = document.getElementById('intro');
const app   = document.getElementById('app');
setTimeout(() => {
  intro.classList.add('leaving');
  setTimeout(() => { app.classList.add('visible'); }, 280);
  setTimeout(() => { intro.classList.add('done');  }, 920);
}, 1650);

/* ── 2. Sheet ── */
function openSheet() {
  document.getElementById('sheetBackdrop').classList.add('open');
  document.getElementById('sahlSheet').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeSheet() {
  document.getElementById('sheetBackdrop').classList.remove('open');
  document.getElementById('sahlSheet').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSheet(); });

/* ── 3. PWA Install ── */

let deferredPrompt = null;

const isStandalone =
  window.matchMedia('(display-mode: standalone)').matches ||
  navigator.standalone === true;

const ua = navigator.userAgent;
const isIOS       = /iphone|ipad|ipod/i.test(ua);
const isIOSSafari = isIOS && /safari/i.test(ua) && !/crios|fxios|chrome/i.test(ua);

/* Register SW — use relative path for Netlify */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(r => console.log('[SW] OK:', r.scope))
      .catch(err => console.warn('[SW] Error:', err));
  });
}

/* Chrome / Edge / Samsung — capture native prompt */
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  console.log('[PWA] beforeinstallprompt captured ✓');
  setAllBtns('native');
});

/* After install */
window.addEventListener('appinstalled', () => {
  deferredPrompt = null;
  setAllBtns('installed');
  console.log('[PWA] App installed ✓');
});

/* On page load — decide state */
document.addEventListener('DOMContentLoaded', () => {
  if (isStandalone) {
    setAllBtns('installed');
    return;
  }
  if (isIOSSafari) {
    setAllBtns('ios');
    return;
  }
  // Default: show button ready, waiting for beforeinstallprompt
  // beforeinstallprompt fires automatically on Chrome if PWA criteria met
  setAllBtns('waiting');
});

/* ── Set state of ALL .btn-install buttons ── */
function setAllBtns(state) {
  document.querySelectorAll('.btn-install').forEach(btn => {
    btn.className = 'btn btn-install'; // reset classes

    if (state === 'installed') {
      btn.classList.add('state-installed');
      btn.disabled = true;
      btn.innerHTML = `
        <div class="btn-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9.5l4.5 4.5 8-8" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        Application installée`;

    } else if (state === 'native') {
      // Real install button — clicking triggers the system dialog
      btn.classList.add('state-native');
      btn.innerHTML = `
        <div class="btn-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2v9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            <path d="M5.5 7.5L9 11l3.5-3.5" stroke="currentColor" stroke-width="1.7"
              stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 13v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2" stroke="currentColor"
              stroke-width="1.7" stroke-linecap="round"/>
          </svg>
        </div>
        Installer l'application`;

    } else if (state === 'ios') {
      btn.classList.add('state-ios');
      btn.innerHTML = `
        <div class="btn-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2v9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            <path d="M5.5 7.5L9 11l3.5-3.5" stroke="currentColor" stroke-width="1.7"
              stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 13v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2" stroke="currentColor"
              stroke-width="1.7" stroke-linecap="round"/>
          </svg>
        </div>
        <span>Installer l'application
          <small>Partager ↑ → Sur l'écran d'accueil</small>
        </span>`;

    } else {
      // 'waiting' — Chrome hasn't fired beforeinstallprompt yet
      // Still show the button, clicking will do nothing yet
      btn.classList.add('state-waiting');
      btn.innerHTML = `
        <div class="btn-icon">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2v9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            <path d="M5.5 7.5L9 11l3.5-3.5" stroke="currentColor" stroke-width="1.7"
              stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 13v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2" stroke="currentColor"
              stroke-width="1.7" stroke-linecap="round"/>
          </svg>
        </div>
        Installer l'application`;
    }
  });
}

/* ── Called by onclick on .btn-install ── */
function handleInlineInstall() {
  if (deferredPrompt) {
    // Chrome/Edge/Samsung: triggers the REAL system install dialog
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') setAllBtns('installed');
      deferredPrompt = null;
    });
  }
  // iOS: nothing to do, instructions already shown on button
}
