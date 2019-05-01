//Nome do cache
var cacheName = 'v1:static';

//Realiza a instalação do ServiceWorker.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('Cache armazenado com sucesso');
            //Arquivos que serão armazenados no cache
            return cache.addAll([
                '/',
                '/404.jpeg',
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

//Todos os pedidos feitos para o servidor passará por aqui
self.addEventListener('fetch', (e) => {
    let response = fetch(e.request)
        .then((response) => response)
        // Caso a busca falhe, exibe arquivo em cache
        .catch(() => caches.match('/offline.html'));
        console.log('Exibindo página do cache');

    e.respondWith(response);
});
