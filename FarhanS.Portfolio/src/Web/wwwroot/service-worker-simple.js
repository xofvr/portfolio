// Simple service worker for GitHub Pages
// Uses standard browser caching instead of complex custom caching logic

const CACHE_NAME = 'farhans-portfolio-simple-v1';

// Install event - minimal setup
self.addEventListener('install', event => {
  console.log('Service worker installing');
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service worker activating');
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.filter(cacheName => 
          cacheName.startsWith('farhans-portfolio-') && cacheName !== CACHE_NAME
        ).map(cacheName => {
          console.log('Removing old cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - simple network-first strategy
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip non-HTTP(S) requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // For navigation requests, always go to network first
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // For all other requests, use network with cache fallback
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Cache successful responses
        if (response.ok && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, responseClone))
            .catch(() => {}); // Ignore cache errors
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
