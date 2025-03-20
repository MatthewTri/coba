self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('second-app')
        .then(function(cache) {
          cache.addAll([
            '/coba',
            '/coba/index.html',
            '/coba/src/css/app.css',
            '/coba/src/js/app.js'
          ])
        })
    );
    return self.clients.claim();
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(res) {
          return res;
        })
    );
  });
    