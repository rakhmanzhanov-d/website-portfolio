const cacheName = "cache-v1";
const resourcesToPrecache = [
	"/",
	"index.html",
	"img/21dayshabit.png",
	"img/21habits.png",
	"img/budgety.png",
	"img/catalog.png",
	"img/Dastan.jpg",
	"img/forkify.png",
	"img/ifk-app.png",
	"img/ifk.png",
	"img/jonasCourse.png",
	"img/landingPage.png",
	"img/onlineStore.png",
	"img/reactInAction.jpg",
	"img/shopify.jpg",
	"img/youTube.jpeg",
	"green.css",
	"default.css",
	"blue.css",
	"purple.css",
	"files/DastanRakhmanzhanovResume.pdf",
	"main.js",
];
self.addEventListener("install", (event) => {
	console.log("Install event!");
	event.waitUntil(
		caches.open(cacheName).then((cache) => {
			return cache.addAll(resourcesToPrecache);
		})
	);
});

self.addEventListener("activate", (event) => {
	console.log("Activate event!");
});

self.addEventListener("fetch", (event) => {
	event.respondWith(
		caches.match(event.request).then((cachedResponse) => {
			return cachedResponse || fetch(event.request);
		})
	);
});
