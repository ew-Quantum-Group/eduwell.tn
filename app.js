/**
 * ═══════════════════════════════════════════════
 *  ROOMS PWA — app.js
 *  Handles:
 *   1. Service Worker registration
 *   2. PWA install prompt (mobile only)
 *   3. Mobile device detection
 *   4. Intro animation
 *   5. Sahl sheet popup
 * ═══════════════════════════════════════════════
 */

'use strict';

/* ═══════════════════════════════════════════════
   1. SERVICE WORKER REGISTRATION
   We register the SW after the page loads so it
   doesn't compete with initial page resources.
═══════════════════════════════════════════════ */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        './service-worker.js',
        { scope: './' }           // SW controls this directory and below
      );

      console.log('[App] Service Worker registered ✓', registration.scope);

      // Check for SW updates periodically
      registration.addEventListener('updatefound', () => {
        const newWorker = registration.installing;
        console.log('[App] New Service Worker installing...');

        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // A new SW is ready — you could show an "Update available" toast here
            console.log('[App] New SW ready — reload to update.');
          }
        });
      });

    } catch (error) {
      console.error('[App] Service Worker registration failed:', error);
    }
  });
} else {
  console.warn('[App] Service Workers not supported in this browser.');
}


/* ═══════════════════════════════════════════════
   2. MOBILE DETECTION
   Uses both screen width and user-agent string
   for maximum reliability across all browsers.
   Returns true if device is likely mobile/tablet.
═══════════════════════════════════════════════ */
function isMobileDevice() {
  // Method A — screen width (most reliable)
  const narrowScreen = window.innerWidth <= 900;

  // Method B — user-agent string (catches tablets in landscape)
  const mobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i
    .test(navigator.userAgent);

  // Method C — touch capability
  const hasTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

  // Consider mobile if at least 2 of 3 signals are true
  const signals = [narrowScreen, mobileUA, hasTouch].filter(Boolean).length;
  return signals >= 2;
}


/* ═══════════════════════════════════════════════
   3. PWA INSTALL PROMPT
   The browser fires 'beforeinstallprompt' when the
   PWA is installable. We capture it, then show our
   custom install button ONLY on mobile devices.
═══════════════════════════════════════════════ */

// Store the deferred install prompt event
let deferredInstallPrompt = null;

// Listen for the browser's install prompt event
window.addEventListener('beforeinstallprompt', event => {
  // Prevent the browser's default mini-infobar on mobile Chrome
  event.preventDefault();

  // Save the event so we can trigger it later
  deferredInstallPrompt = event;
  console.log('[App] Install prompt captured ✓');

  // Only show our install button on mobile
  if (isMobileDevice()) {
    showInstallButton();
  }
});

// Show the install button with a smooth slide-up animation
function showInstallButton() {
  const btn = document.getElementById('pwa-install-btn');
  if (!btn) return;

  btn.classList.add('visible');
  console.log('[App] Install button shown (mobile) ✓');
}

// Hide the install button
function hideInstallButton() {
  const btn = document.getElementById('pwa-install-btn');
  if (!btn) return;

  btn.classList.remove('visible');
  btn.classList.add('hiding');
  setTimeout(() => btn.remove(), 400); // remove from DOM after animation
}

// Called when user taps the install button
async function triggerInstall() {
  if (!deferredInstallPrompt) {
    console.warn('[App] No install prompt available.');
    return;
  }

  // Show the native browser install dialog
  deferredInstallPrompt.prompt();

  // Wait for the user's choice
  const { outcome } = await deferredInstallPrompt.userChoice;
  console.log(`[App] Install prompt outcome: ${outcome}`);

  if (outcome === 'accepted') {
    console.log('[App] User accepted install ✓');
    hideInstallButton();
  } else {
    console.log('[App] User dismissed install.');
    // Keep the button visible — they might reconsider
  }

  // The prompt can only be used once — clear it
  deferredInstallPrompt = null;
}

// Hide install button if app is already installed (standalone mode)
window.addEventListener('appinstalled', () => {
  console.log('[App] PWA installed successfully ✓');
  deferredInstallPrompt = null;
  hideInstallButton();
});

// Also check on load if already running as installed PWA
window.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true) {
    // Already running as PWA — no need for install button
    console.log('[App] Running as installed PWA.');
    hideInstallButton();
  }
});


/* ═══════════════════════════════════════════════
   4. INTRO ANIMATION
═══════════════════════════════════════════════ */
window.addEventListener('DOMContentLoaded', () => {
  const intro = document.getElementById('intro');
  const app   = document.getElementById('app');

  if (!intro || !app) return;

  // After 1.65s show curtain-wipe exit
  setTimeout(() => {
    intro.classList.add('leaving');

    // Reveal app content slightly before curtains fully open
    setTimeout(() => app.classList.add('visible'), 280);

    // Remove intro from DOM entirely
    setTimeout(() => intro.classList.add('done'), 920);
  }, 1650);
});


/* ═══════════════════════════════════════════════
   5. SAHL SHEET POPUP
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

// Close Sahl sheet on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSheet();
});


/* ═══════════════════════════════════════════════
   6. ONLINE / OFFLINE STATUS INDICATOR
   Shows a subtle toast when connectivity changes.
═══════════════════════════════════════════════ */
function showNetworkToast(online) {
  // Remove any existing toast
  const existing = document.getElementById('network-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'network-toast';
  toast.textContent = online ? '✓ Back online' : '⚡ You\'re offline';
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

  // Animate in
  requestAnimationFrame(() => {
    toast.style.opacity = '1';
    toast.style.transform = 'translateX(-50%) translateY(0)';
  });

  // Animate out after 2.5s
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

window.addEventListener('online',  () => showNetworkToast(true));
window.addEventListener('offline', () => showNetworkToast(false));
