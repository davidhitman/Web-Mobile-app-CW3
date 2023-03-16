var cacheName = "petstore-v1";
var cacheFiles = [
    "index1.html",
    //"products.js",
    "pics/japanese.png",
    "pics/japanese.png",
    "pics/japanese.png",
    "pics/japanese.png",
    "pics/japanese.png",
    "pics/japanese.png"
];
self.addEventListener("install", function(e) {
    console.log("[Service Worker] Install");
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log("[Service Worker] Caching files");
            return cache.addAll(cacheFiles);
        })
    );
});

