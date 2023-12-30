// Service Worker Lifecycle: Install, Activate, Fetch

// Install Event: Cache necessary files
self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('your-app-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/manifest.json',
          // Add other files your app needs to work offline
        ]);
      })
    );
  });
  
  // Activate Event: Clean up old caches
  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== 'your-app-cache') {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });
  
  // Fetch Event: Serve from cache, or fetch from network and cache
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request).then(fetchResponse => {
          return caches.open('your-app-cache').then(cache => {
            cache.put(event.request, fetchResponse.clone());
            return fetchResponse;
          });
        });
      })
    );
  });