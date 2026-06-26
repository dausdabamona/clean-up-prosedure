// ==================== SEDONA RELEASE APP - SERVICE WORKER ====================
// Offline support. All paths are RELATIVE so it works under the GitHub Pages
// project subpath (…/clean-up-prosedure/). Bump CACHE_NAME on any asset change.

const CACHE_NAME = 'sedona-release-v14';
const OFFLINE_URL = 'sedona-app.html';

// Files cached for offline use (relative to the service worker scope).
const ASSETS_TO_CACHE = [
  'index.html',
  'sedona-app.html',
  'cleanup-procedure.html',
  'gain-book.html',
  'letting-go.html',
  'manifesting-workbook.html',
  'core-wanting-release.html',
  '14-days-resistance.html',
  'area-session.html',
  'resistance-session.html',
  '9-emosi-dasar.html',
  'advanced-techniques.html',
  'nlp-techniques.html',
  'silva-method.html',
  'wealth-protocol.html',

  // CSS
  'styles.css',

  // JavaScript
  'config.js',
  'common.js',
  'releasing-engine.js',
  'cleanup-procedure-app.js',
  'core-wanting-app.js',
  'gain-book.js',
  'letting-go-app.js',
  'manifesting-app.js',
  'resistance-app.js',
  'resistance-areas-data.js',
  'area-session.js',
  '9-emosi-dasar.js',
  'advanced-techniques.js',
  'nlp-scripts.js',
  'silva-scripts.js',
  'wealth-scripts.js',
  'pwa-register.js',

  // PWA assets
  'manifest.json',
  'icons/icon.svg'
];

// ==================== INSTALL ====================
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      // Cache each asset individually so one missing file does not abort the
      // whole install (cache.addAll rejects entirely on a single failure).
      .then((cache) => Promise.allSettled(
        ASSETS_TO_CACHE.map((url) => cache.add(url).catch((e) => {
          console.warn('[ServiceWorker] skip caching', url, e);
        }))
      ))
      .then(() => self.skipWaiting())
  );
});

// ==================== ACTIVATE ====================
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(
        names.filter((n) => n !== CACHE_NAME).map((n) => caches.delete(n))
      ))
      .then(() => self.clients.claim())
  );
});

// ==================== FETCH ====================
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const req = event.request;

  // Page navigations: network-first so HTML updates promptly; fall back to
  // cache (then the offline page) when offline. Avoids serving stale pages.
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => caches.match(req).then((r) => r || caches.match(OFFLINE_URL)))
    );
    return;
  }

  // Static assets: cache-first for speed/offline, then network (and cache it).
  // Cross-origin requests (e.g. the Apps Script API) are not 'basic' so they
  // are never cached — API calls always go to the network.
  event.respondWith(
    caches.match(req).then((cached) => cached || fetch(req)
      .then((res) => {
        if (res && res.status === 200 && res.type === 'basic') {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(req, copy));
        }
        return res;
      })
      .catch(() => new Response('Offline', { status: 503, statusText: 'Service Unavailable' })))
  );
});

// Allow the page to trigger an immediate update.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// ==================== GAIN BOOK REMINDERS (best-effort) ====================
// Periodic Background Sync wakes the SW ~2x/day (where supported, installed PWA)
// to remind the user to log a gain.
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'gain-reminder') {
    event.waitUntil(
      self.registration.showNotification('🌟 Waktunya catat Gain', {
        body: 'Sudah catat gain hari ini? Tulis satu hal positif sekarang.',
        icon: 'icons/icon.svg',
        tag: 'gain-reminder',
        renotify: true
      })
    );
  }
});

// Tapping a reminder opens (or focuses) the Gain Book.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((wins) => {
      for (const w of wins) {
        if (w.url.indexOf('gain-book.html') !== -1 && 'focus' in w) return w.focus();
      }
      if (clients.openWindow) return clients.openWindow('gain-book.html');
    })
  );
});
