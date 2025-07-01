'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c86a12f98f60dc72cc28308760b20b27",
"assets/AssetManifest.bin.json": "5fd7bcaf70ef19600eaac556b184aa42",
"assets/AssetManifest.json": "7fa735be0b1f973e54f8260202b1449a",
"assets/assets/article/contactusbanner.png": "26777cd10cc940c67680c9c6d3dc5497",
"assets/assets/article/fresherarticle.jpg": "b9a6c78c3d0579ac3046542658b660ce",
"assets/assets/article/fresherarticle1.jpg": "740931b9e335c24023c87c3fd0303d2b",
"assets/assets/article/healtharticle.jpg": "c0c57aaea792e28f5c1f8f1d01e9f671",
"assets/assets/article/healtharticle1.jpg": "9b5a3b7745b3e64a62e4c6dfff23da54",
"assets/assets/article/onlinearticle.jpg": "fbd6f5167a363bcf35e0d9979277a933",
"assets/assets/article/onlinearticle1.jpg": "47725188219a5160d14a44c7053d75b9",
"assets/assets/article/services.jpg": "00d3a5c8bf8dc8b0c1060f5659b0ece0",
"assets/assets/article/studyarticle1.jpg": "a3cf3ae0d214bcb2d667d99f312175f6",
"assets/assets/article/studyarticle11.jpg": "bf9a67fddfcad62f362fc0ab7e70df36",
"assets/assets/article/studyarticle2.jpg": "4e9eeb50d66b221812d196ee3c93029f",
"assets/assets/article/studyarticle22.jpg": "747cff0acc9772881be3503b5964dc60",
"assets/assets/article/studyarticle3.jpg": "07fbde1d417f9d2a5ffd0316ae5e6e1f",
"assets/assets/article/studyarticle33.jpg": "bdb2fd98e3add4401d59e5f8273582b6",
"assets/assets/countries/aboutus.png": "c1597758d7527f7979225f53b37d4596",
"assets/assets/countries/aus.jpg": "c86544febd201bbf69af9967697142bc",
"assets/assets/countries/canada.jpg": "83c2906c824bec8d95597953f7dd8e23",
"assets/assets/countries/contactbanner.jpg": "cdb059875e6242dee043e5d08a0130e5",
"assets/assets/countries/jobs.jpg": "93fb30f4dacead94bd1238f2d9c50edc",
"assets/assets/countries/malasia.jpg": "20e004da6e8eb7726e858e87696a6278",
"assets/assets/countries/study.jpg": "b7688cafa5009d7ba322bab31ca55df9",
"assets/assets/countries/study1.jpg": "db664cabb644e2593c0f3454f3233af8",
"assets/assets/countries/studyabroad.jpg": "93c16961e29b290f7088020673dfeb24",
"assets/assets/countries/studyaus.jpg": "43730f2e1f379b35aa907a60987c498c",
"assets/assets/countries/uae.jpg": "d074583cdcb6511cdbcf084e8bc0ba9f",
"assets/assets/countries/uk.jpg": "ce707e98da53c992df00c95c038b456f",
"assets/assets/countries/usa.jpg": "37241c196ae539bf487b83b883d9c060",
"assets/assets/countries/visa.jpg": "63b998862c9f53d836ebf4e4e973400a",
"assets/assets/flags/america.png": "5a7100fc44714ea9f05702e160f5629b",
"assets/assets/flags/australia.png": "21e8dbb6895334042e34b4f0fde0d08b",
"assets/assets/flags/canada.png": "1534ccb55c12dd47577ac0571b08a645",
"assets/assets/flags/ireland.png": "247fcace4cb8cd97aed57bfcd7ec7c70",
"assets/assets/flags/japan.png": "35727838fceb3e1577e407f60c9ecb04",
"assets/assets/flags/uk.png": "0539d02ef61b3eebe52137e134bb1751",
"assets/assets/icons/briefcase.png": "be5952d714f472e56dfaa49853d81dbd",
"assets/assets/icons/career.svg": "171dd178c1545d5403babf684f7b6f3c",
"assets/assets/icons/client.png": "66fcfbc7707faf6c5f4062b8432c356c",
"assets/assets/icons/documentation.svg": "59f9184259514facf028a90f7da9403a",
"assets/assets/icons/fallbackimage.png": "9b9692c9f0db9f6276e6bd29a98c25e0",
"assets/assets/icons/framepng.png": "ae53ce17346014133ff2dff80f50e9d8",
"assets/assets/icons/framesvg.svg": "1ad681f5fef6f3ec2af6181108bc5f8e",
"assets/assets/icons/graduation.png": "4894f9eb4dad012bb10e930a5ab00386",
"assets/assets/icons/graph.svg": "319f5f2872fd6bfc1555dfa0219f3ec3",
"assets/assets/icons/locationsketch.png": "77f95f575f0b0f1b8cece8d9e528392e",
"assets/assets/icons/planesketch.png": "a6adabeb97aa65b0f969c15f6032bf0a",
"assets/assets/icons/resume.svg": "f1beee829b9c1c7e0b63c7b9778f77f0",
"assets/assets/icons/testing.svg": "091152f7707d53a28643c4a319bab528",
"assets/assets/icons/visa.svg": "7ed8bd79529019546d70b82bddcd0afb",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "51970efc7af2ea270ca080b163bd3439",
"assets/NOTICES": "841a51778fde69a328dd22379f1d1a68",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "aa58bfdaf22e8ca5cc1b133f644226a8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ab762567e9b1d8ed835c503f4ac51912",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "0e814614cf52a99775874d90706f82ab",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "96a2170d5333f955ef58c0bb366fef22",
"/": "96a2170d5333f955ef58c0bb366fef22",
"main.dart.js": "c146454e506940d1e3b959b955187c76",
"manifest.json": "4dc0e331a8596eb7d8a32a747de4d0e0",
"version.json": "9d4bcae240174181a4159fc7ca963660"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
