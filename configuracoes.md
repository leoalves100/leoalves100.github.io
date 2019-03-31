# File **manifest.json**
````
 {
    "short_name": "Teste", = Nome do aplicativo instalado
    "name": "Teste de app PWA", = Nome exibido ao abrir o aplicativo
    "description": "Progressive web application demonstration",
    "icons": [
        {
            "src": "Assets/img/imagen_48_48.png",
            "sizes": "48x48",
            "type": "image/png"
        },
        {
            "src": "Assets/img/imagen_96_96.png",
            "sizes": "96x96",
            "type": "image/png"
        },
        {
            "src": "Assets/img/imagen_144_144.png",
            "sizes": "144x144",
            "type": "image/png"
        },
        {
            "src": "Assets/img/imagen_192_192.png", = Ícone instalado no celular, resolução ideal 
            "sizes": "192x192",
            "type": "image/png" 
        },
        {
            "src": "Assets/img/imagen_256_256.png",
            "sizes": "256x256",
            "type": "image/png"
        },
        {
            "src": "Assets/img/imagen_512_512.png",
            "sizes": "512x512",
            "type": "image/png"
        }

    ],
    "start_url": "./?utm_source=web_app_manifest", = URL aberta no aplicativo
    "display": "standalone", = Modo de abertura do app[fullscreen(sem barra de status), standalone(com barra), minimal-uiou browser(direto no browser).]
    "orientation": "portrait",= Retrato | landscape(paisagem)
    "theme_color": "#000000", = Cor da barra de status
    "background_color": "#29BDBB" = Cor exibida ao iniciar aplicativo
}
````