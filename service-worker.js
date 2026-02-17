// ==================== SEDONA RELEASE APP - SERVICE WORKER ====================
// Version: 1.0.0 - Enables offline functionality

const CACHE_NAME = 'sedona-release-v1';
const OFFLINE_URL = 'sedona-app.html';

// Files to cache for offline use
const ASSETS_TO_CACHE = [
  '/',
  '/sedona-app.html',
  '/index.html',
  '/daily-release.html',
  '/letting-go.html',
  '/9-emosi-dasar.html',
  '/core-wanting-release.html',
  '/cleanup-procedure.html',
  '/area-session.html',
  '/resistance-session.html',
  '/14-days-resistance.html',
  '/advanced-techniques.html',
  '/silva-method.html',
  '/nlp-techniques.html',
  '/wealth-protocol.html',
  '/manifesting-workbook.html',

  // CSS
  '/styles.css',

  // JavaScript
  '/common.js',
  '/releasing-engine.js',
  '/letting-go-app.js',
  '/9-emosi-dasar.js',
  '/cleanup-scripts.js',
  '/area-session.js',
  '/resistance-app.js',
  '/resistance-areas-data.js',
  '/advanced-techniques.js',
  '/silva-scripts.js',
  '/nlp-scripts.js',
  '/wealth-scripts.js',
  '/manifesting-app.js',

  // Manifest & Icons
  '/manifest.json',
  '/icons/icon-72x72.png',
  '/icons/icon-96x96.png',
  '/icons/icon-128x128.png',
  '/icons/icon-144x144.png',
  '/icons/icon-152x152.png',
  '/icons/icon-192x192.png',
  '/icons/icon-384x384.png',
  '/icons/icon-512x512.png'
];

// ==================== INSTALL EVENT ====================
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Install');

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Caching app shell');
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => {
        console.log('[ServiceWorker] Skip waiting');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('[ServiceWorker] Cache failed:', error);
      })
  );
});

// ==================== ACTIVATE EVENT ====================
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activate');

  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => cacheName !== CACHE_NAME)
            .map((cacheName) => {
              console.log('[ServiceWorker] Removing old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[ServiceWorker] Claiming clients');
        return self.clients.claim();
      })
  );
});

// ==================== FETCH EVENT ====================
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          // Return cached version
          return cachedResponse;
        }

        // Not in cache, fetch from network
        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the new resource
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Network failed, try to return offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
            return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
          });
      })
  );
});

// ==================== MESSAGE EVENT ====================
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ==================== BACKGROUND SYNC (Future) ====================
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    console.log('[ServiceWorker] Syncing data...');
    // Future: sync localStorage data to server
  }
});

console.log('[ServiceWorker] Loaded');
