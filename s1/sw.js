/* ═══════════════════════════════════
   Sahl App — Service Worker v3
   https://sahleducation.netlify.app/
═══════════════════════════════════ */
const CACHE = 'sahl-v3';

const PRECACHE = [
  '/login.html',
  '/offline.html',
  '/manifest.json',
  '/css/style.css',
  '/pwa/pwa-install.css',
  '/pwa/pwa-install.js',
  '/js/ACC.js',
  '/js/script.js',
  '/assets/images/app-store.png',
  '/assets/images/icons/icon-192x192.png',
  '/assets/images/icons/icon-512x512.png'
];

/* ── Install ── */
self.addEventListener('install', e => {
  console.log('[SW] Installing…');
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(
        PRECACHE.map(u => c.add(u).catch(err => console.warn('[SW] Skip:', u, err)))
      ))
      .then(() => {
        console.log('[SW] Install complete');
        return self.skipWaiting();
      })
  );
});

/* ── Activate — remove old caches ── */
self.addEventListener('activate', e => {
  console.log('[SW] Activating…');
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => {
          console.log('[SW] Delete old cache:', k);
          return caches.delete(k);
        })
      ))
      .then(() => {
        console.log('[SW] Active');
        return self.clients.claim();
      })
  );
});

/* ── Fetch ── */
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (!url.protocol.startsWith('http')) return;

  /* HTML — network first, cache fallback, offline page last */
  if (e.request.headers.get('Accept')?.includes('text/html')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(() =>
          caches.match(e.request)
            .then(r => r || caches.match('/offline.html'))
        )
    );
    return;
  }

  /* Assets — cache first, network fallback */
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request)
        .then(res => {
          if (res.ok) {
            caches.open(CACHE).then(c => c.put(e.request, res.clone()));
          }
          return res;
        })
        .catch(() => caches.match('/offline.html'));
    })
  );
});

/* ── Messages ── */
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') {
    console.log('[SW] Skip waiting…');
    self.skipWaiting();
  }
});
