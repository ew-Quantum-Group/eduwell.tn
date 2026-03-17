/* Sahl App — Service Worker v2 — sahleducation.netlify.app */
const CACHE = 'sahl-v2';

const PRECACHE = [
  '/',
  '/index.html',
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

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => Promise.allSettled(PRECACHE.map(u => c.add(u).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (!url.protocol.startsWith('http')) return;

  /* HTML — network first, cache fallback */
  if (e.request.headers.get('Accept')?.includes('text/html')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
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

  /* Everything else — cache first, network fallback */
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request)
        .then(res => {
          if (res.ok) {
            const clone = res.clone();
            caches.open(CACHE).then(c => c.put(e.request, clone));
          }
          return res;
        })
        .catch(() => caches.match('/offline.html'));
    })
  );
});

self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
