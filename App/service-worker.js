/**
 * ═══════════════════════════════════════════════
 *  ROOMS PWA — Service Worker
 *  Strategy: Cache-First for assets, Network-First
 *  for navigation (HTML), with offline fallback.
 * ═══════════════════════════════════════════════
 */

// ── Cache names ──────────────────────────────────
// Bump CACHE_VERSION to force old caches to clear
const CACHE_VERSION   = 'v1.0.0';
const STATIC_CACHE    = `rooms-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE   = `rooms-dynamic-${CACHE_VERSION}`;
const FONT_CACHE      = `rooms-fonts-${CACHE_VERSION}`;

// ── Files to pre-cache on install ────────────────
// These are essential for the app shell to work offline
const STATIC_ASSETS = [
  './index.html',
  './styles.css',
  './app.js',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './assets/images/',
];

// ── External fonts (Google Fonts) ────────────────
const FONT_URLS = [
  'https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap',
  'https://fonts.gstatic.com',
];

// ── Max entries in dynamic cache ─────────────────
const DYNAMIC_CACHE_LIMIT = 50;


/* ═══════════════════════════════════════════════
   INSTALL — pre-cache the app shell
═══════════════════════════════════════════════ */
self.addEventListener('install', event => {
  console.log('[SW] Installing — caching app shell...');

  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => {
      // addAll fails if ANY request fails, so we
      // cache each asset individually to be resilient
      return Promise.allSettled(
        STATIC_ASSETS.map(url =>
          cache.add(url).catch(err =>
            console.warn(`[SW] Failed to cache: ${url}`, err)
          )
        )
      );
    }).then(() => {
      console.log('[SW] App shell cached ✓');
      // Skip waiting so the new SW activates immediately
      return self.skipWaiting();
    })
  );
});


/* ═══════════════════════════════════════════════
   ACTIVATE — clean up old caches
═══════════════════════════════════════════════ */
self.addEventListener('activate', event => {
  console.log('[SW] Activating — cleaning old caches...');

  const allowedCaches = [STATIC_CACHE, DYNAMIC_CACHE, FONT_CACHE];

  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => !allowedCaches.includes(key))
          .map(key => {
            console.log(`[SW] Deleting old cache: ${key}`);
            return caches.delete(key);
          })
      )
    ).then(() => {
      console.log('[SW] Old caches cleared ✓');
      // Take control of all open pages immediately
      return self.clients.claim();
    })
  );
});


/* ═══════════════════════════════════════════════
   FETCH — intercept network requests
═══════════════════════════════════════════════ */
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // ── Skip non-GET requests (POST, etc.) ──────
  if (request.method !== 'GET') return;

  // ── Skip browser extension requests ─────────
  if (!url.protocol.startsWith('http')) return;

  // ── Google Fonts → Cache-First ───────────────
  if (url.origin.includes('fonts.googleapis.com') ||
      url.origin.includes('fonts.gstatic.com')) {
    event.respondWith(cacheFirst(request, FONT_CACHE));
    return;
  }

  // ── Static assets (CSS/JS/images) → Cache-First
  if (
    request.destination === 'style'  ||
    request.destination === 'script' ||
    request.destination === 'image'  ||
    request.destination === 'font'
  ) {
    event.respondWith(cacheFirst(request, STATIC_CACHE));
    return;
  }

  // ── HTML navigation → Network-First with offline fallback
  if (request.mode === 'navigate' ||
      request.destination === 'document') {
    event.respondWith(networkFirst(request));
    return;
  }

  // ── Everything else → Stale-While-Revalidate ─
  event.respondWith(staleWhileRevalidate(request));
});


/* ═══════════════════════════════════════════════
   STRATEGY: Cache-First
  1. Check cache → return if found
  2. Fetch from network → store in cache → return
═══════════════════════════════════════════════ */
async function cacheFirst(request, cacheName) {
  const cache    = await caches.open(cacheName);
  const cached   = await cache.match(request);

  if (cached) {
    return cached; // ✓ Served from cache
  }

  try {
    const response = await fetch(request);
    // Only cache valid responses
    if (response && response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (err) {
    console.warn('[SW] Cache-First fetch failed:', err);
    // Return offline fallback for images
    if (request.destination === 'image') {
      return offlineImageFallback();
    }
    throw err;
  }
}


/* ═══════════════════════════════════════════════
   STRATEGY: Network-First
  1. Fetch from network → store in cache → return
  2. If offline → return from cache
  3. If not in cache → return offline HTML page
═══════════════════════════════════════════════ */
async function networkFirst(request) {
  const cache = await caches.open(DYNAMIC_CACHE);

  try {
    const response = await fetch(request);
    if (response && response.status === 200) {
      cache.put(request, response.clone());
      trimCache(DYNAMIC_CACHE, DYNAMIC_CACHE_LIMIT);
    }
    return response;
  } catch (err) {
    // Offline — try cache first
    const cached = await cache.match(request);
    if (cached) return cached;

    // Try the static cache (index.html)
    const staticFallback = await caches.match('./index.html');
    if (staticFallback) return staticFallback;

    // Last resort — inline offline response
    return offlinePageFallback();
  }
}


/* ═══════════════════════════════════════════════
   STRATEGY: Stale-While-Revalidate
  1. Return from cache immediately (if exists)
  2. Fetch from network in background → update cache
═══════════════════════════════════════════════ */
async function staleWhileRevalidate(request) {
  const cache  = await caches.open(DYNAMIC_CACHE);
  const cached = await cache.match(request);

  // Fetch in background regardless
  const fetchPromise = fetch(request).then(response => {
    if (response && response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => null);

  return cached || fetchPromise;
}


/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */

// Trim dynamic cache to prevent unbounded growth
async function trimCache(cacheName, maxItems) {
  const cache = await caches.open(cacheName);
  const keys  = await cache.keys();
  if (keys.length > maxItems) {
    // Delete oldest entries first
    await cache.delete(keys[0]);
    trimCache(cacheName, maxItems);
  }
}

// Inline SVG placeholder for offline images
function offlineImageFallback() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <rect width="200" height="200" fill="#f0eeeb"/>
    <text x="100" y="110" font-family="sans-serif" font-size="14" fill="#a09b94" text-anchor="middle">Offline</text>
  </svg>`;
  return new Response(svg, {
    headers: { 'Content-Type': 'image/svg+xml' }
  });
}

// Minimal offline HTML page
function offlinePageFallback() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>rooms — offline</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{min-height:100vh;background:#0c0c0c;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:'Sora',sans-serif;color:#fff;gap:16px;padding:24px}
    .dot{width:10px;height:10px;border-radius:50%;background:#a78bfa;margin:0 auto 8px}
    h1{font-size:28px;font-weight:800;letter-spacing:-1px}
    p{font-size:14px;color:rgba(255,255,255,0.45);text-align:center;max-width:260px;line-height:1.6}
    button{margin-top:8px;padding:12px 28px;background:#fff;color:#0c0c0c;border:none;border-radius:12px;font-size:15px;font-weight:600;cursor:pointer}
  </style>
</head>
<body>
  <div class="dot"></div>
  <h1>rooms</h1>
  <p>You're offline. Check your connection and try again.</p>
  <button onclick="location.reload()">Try again</button>
</body>
</html>`;
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' }
  });
}


/* ═══════════════════════════════════════════════
   PUSH NOTIFICATIONS (ready for future use)
═══════════════════════════════════════════════ */
self.addEventListener('push', event => {
  if (!event.data) return;

  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title || 'rooms', {
      body:  data.body  || 'You have a new message.',
      icon:  './icons/icon-192.png',
      badge: './icons/icon-192.png',
      data:  { url: data.url || '/' },
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
