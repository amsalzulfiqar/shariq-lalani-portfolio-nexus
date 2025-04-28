// Cache version - increment this when assets change
const CACHE_VERSION = 'v1';
const CACHE_NAME = `shariqlalani-cache-${CACHE_VERSION}`;

// Assets to precache
const IMAGE_ASSETS = [
  '/lovable-uploads/21005048-580b-49bd-9bbb-5e9f1335a17c.png',
  '/lovable-uploads/688646cc-2ad2-4d62-a487-e64b409ec429.png',
  '/lovable-uploads/8c8728bf-ab7a-4c4c-b4f8-dcb8665ede8c.png',
  '/lovable-uploads/cf679340-41be-421e-a167-6db583bdf43b.png',
  '/lovable-uploads/c0301122-4fa9-49fc-8980-968120e14084.png',
  '/lovable-uploads/6f6bc79b-11f3-4bb4-a730-61666af2c750.png',
  '/lovable-uploads/0415268e-2d64-4a2b-8311-46ca2a298471.png'
];

// TypeScript declaration for service worker scope
declare var self: ServiceWorkerGlobalScope;

// Allow TypeScript to recognize these service worker events
interface ExtendableEvent extends Event {
  waitUntil(fn: Promise<any>): void;
}

interface FetchEvent extends Event {
  request: Request;
  respondWith(response: Promise<Response> | Response): void;
}

// Install service worker and cache assets
self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service worker caching assets');
        return cache.addAll(IMAGE_ASSETS);
      })
      .catch(err => console.error('Cache error:', err))
  );
});

// Activate - clean up old caches
self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith('shariqlalani-cache-') && cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Fetch strategy: Cache first, then network as fallback
self.addEventListener('fetch', (event: FetchEvent) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;
  
  // Only cache image requests
  const url = new URL(event.request.url);
  const isImage = 
    url.pathname.endsWith('.png') || 
    url.pathname.endsWith('.jpg') || 
    url.pathname.endsWith('.jpeg') || 
    url.pathname.endsWith('.gif') ||
    url.pathname.endsWith('.webp') ||
    url.pathname.includes('/lovable-uploads/');

  if (!isImage) return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if found
        if (response) {
          return response;
        }

        // Otherwise fetch from network
        return fetch(event.request).then(networkResponse => {
          // Don't cache non-successful responses
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }

          // Clone the response to save in cache and return
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        });
      })
  );
});
