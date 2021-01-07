const cacheName = "cache-v1";
console.log("Service worker is working");
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
	console.log("Fetch intercepted for:", event.request.url);
});
