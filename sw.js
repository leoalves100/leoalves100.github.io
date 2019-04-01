//Nome do cache
var cacheName = 'v1:static';

// Durante a fase de instalação, você geralmente deseja armazenar em cache os arquivos estáticos.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('Cache armazenado');
            //Arquivos que serão armazenados no cache
            return cache.addAll([
                '/',
                '/offline.html',
                '/main.js',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css',
                'https://code.jquery.com/jquery-3.3.1.slim.min.js',
                'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
                'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'

            ]).then(function() {
                //Força a atualização do Service Worker
                self.skipWaiting();
            });
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker ativado.');
  });


  self.addEventListener('fetch', (event) => {
    event.respondWith(async function() {
      try {
        return await fetch(event.request);
      } catch (err) {
        return caches.match(event.request);
      }
    }());
  });


/* when the browser fetches a URL…
self.addEventListener('fetch', function(event) {
    // … either respond with the cached object or go ahead and fetch the actual URL
    event.respondWith(
        caches.match(event.request).then(function(response) {
            if (response) {
                // retrieve from cache
                return response;
            }
            // fetch as normal
            return fetch(event.request);
        })
    );
});*/
