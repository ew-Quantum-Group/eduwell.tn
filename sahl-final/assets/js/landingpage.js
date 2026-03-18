/**
 * ═══════════════════════════════════════════════
 *  SAHL APP — landingpage.js
 *  Ported from Rooms PWA system + Sahl specifics
 *
 *  1. Service Worker registration
 *  2. PWA install prompt (mobile + inline button)
 *  3. Mobile device detection
 *  4. Intro animation
 *  5. Sahl sheet popup
 *  6. Online / Offline status toast
 * ═══════════════════════════════════════════════
 */

'use strict';


/* ═══════════════════════════════════════════════
   1. SERVICE WORKER REGISTRATION
═══════════════════════════════════════════════ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        '/sw.js',
        { scope: '/' }
      );
      console.log('[Sahl] Service Worker registered ✓', registration.scope);

      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            console.log('[Sahl] New SW ready — reload to update.');
          }
        });
      });

    } catch (error) {
      console.error('[Sahl] Service Worker registration failed:', error);
    }
  });
}


/* ═══════════════════════════════════════════════
   2. MOBILE DETECTION
   Same logic as Rooms — 2-of-3 signals
═══════════════════════════════════════════════ */
function isMobileDevice() {
  const narrowScreen = window.innerWidth <= 900;
  const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i
    .test(navigator.userAgent);
  const hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
  return [narrowScreen, mobileUA, hasTouch].filter(Boolean).length >= 2;
}

const isIOS       = /iphone|ipad|ipod/i.test(navigator.userAgent);
const isIOSSafari = isIOS && /safari/i.test(navigator.userAgent) && !/crios|fxios|chrome/i.test(navigator.userAgent);


/* ═══════════════════════════════════════════════
   3. PWA INSTALL PROMPT
   Ported from Rooms — handles:
   - Chrome/Edge/Samsung: native beforeinstallprompt
   - iOS Safari: instructions shown in button
   - Inline button (always in button list) + floating banner
═══════════════════════════════════════════════ */
let deferredInstallPrompt = null;

// Capture the native browser install event
window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault();
  deferredInstallPrompt = event;
  console.log('[Sahl] Install prompt captured ✓');

  // Update ALL install buttons to active state
  setInstallBtnsState('native');
});

// App successfully installed
window.addEventListener('appinstalled', () => {
  console.log('[Sahl] PWA installed ✓');
  deferredInstallPrompt = null;
  setInstallBtnsState('installed');
});

// On page load: check current state
window.addEventListener('DOMContentLoaded', () => {

  // Already running as installed PWA
  if (window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true) {
    console.log('[Sahl] Running as installed PWA.');
    setInstallBtnsState('installed');
    return;
  }

  // iOS Safari — can't use beforeinstallprompt, show instructions
  if (isIOSSafari) {
    setInstallBtnsState('ios');
    return;
  }

  // Default state: button visible, waiting for beforeinstallprompt
  setInstallBtnsState('waiting');
});


/* ── Update every .btn-install on the page ── */
function setInstallBtnsState(state) {
  document.querySelectorAll('.btn-install').forEach(btn => {
    btn.className = 'btn btn-install'; // reset

    if (state === 'installed') {
      btn.classList.add('state-installed');
      btn.disabled = true;
      btn.innerHTML = `
        <div class="btn-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9.5l4.5 4.5 8-8" stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        App installed ✓`;

    } else if (state === 'native') {
      // Real install — clicking triggers native system dialog
      btn.classList.add('state-native');
      btn.innerHTML = `
        <div class="btn-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2v9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            <path d="M5.5 7.5L9 11l3.5-3.5" stroke="currentColor" stroke-width="1.7"
              stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 13v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2"
              stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
          </svg>
        </div>
        Installer l'application`;

    } else if (state === 'ios') {
      btn.classList.add('state-ios');
      btn.innerHTML = `
        <div class="btn-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2v9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            <path d="M5.5 7.5L9 11l3.5-3.5" stroke="currentColor" stroke-width="1.7"
              stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 13v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2"
              stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
          </svg>
        </div>
        <span class="install-btn-text">
          Installer l'application
          <small>Partager &#9650; → Sur l'écran d'accueil</small>
        </span>`;

    } else {
      // 'waiting' — Chrome hasn't fired prompt yet, show button ready
      btn.classList.add('state-waiting');
      btn.innerHTML = `
        <div class="btn-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 2v9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
            <path d="M5.5 7.5L9 11l3.5-3.5" stroke="currentColor" stroke-width="1.7"
              stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 13v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2"
              stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
          </svg>
        </div>
        Installer l'application`;
    }
  });
}


/* ── Triggered when user taps any install button ── */
async function handleInlineInstall() {
  if (!deferredInstallPrompt) return; // iOS: nothing to do, instructions already visible

  deferredInstallPrompt.prompt();
  const { outcome } = await deferredInstallPrompt.userChoice;
  console.log('[Sahl] Install outcome:', outcome);

  if (outcome === 'accepted') {
    setInstallBtnsState('installed');
  }
  deferredInstallPrompt = null;
}

// Legacy alias (used in Rooms' floating button onclick)
async function triggerInstall() {
  await handleInlineInstall();
}


/* ═══════════════════════════════════════════════
   4. INTRO ANIMATION  (original Sahl)
═══════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const app   = document.getElementById('app');
  if (!intro || !app) return;

  setTimeout(() => {
    intro.classList.add('leaving');
    setTimeout(() => app.classList.add('visible'), 280);
    setTimeout(() => intro.classList.add('done'), 920);
  }, 1650);
});


/* ═══════════════════════════════════════════════
   5. SAHL SHEET POPUP  (original Sahl)
═══════════════════════════════════════════════ */
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


/* ═══════════════════════════════════════════════
   6. ONLINE / OFFLINE TOAST  (ported from Rooms)
═══════════════════════════════════════════════ */
function showNetworkToast(online) {
  const existing = document.getElementById('network-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'network-toast';
  toast.textContent = online ? '✓ Connexion rétablie' : '⚡ Hors connexion';
  toast.style.cssText = `
    position: fixed;
    bottom: 90px;
    left: 50%;
    transform: translateX(-50%) translateY(20px);
    background: ${online ? '#0c0c0c' : '#7c4dff'};
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    padding: 10px 20px;
    border-radius: 100px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    z-index: 9000;
    opacity: 0;
    transition: all 0.3s cubic-bezier(.22,1,.36,1);
    pointer-events: none;
    white-space: nowrap;
  `;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

window.addEventListener('online',  () => showNetworkToast(true));
window.addEventListener('offline', () => showNetworkToast(false));
