/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5d0ccb740d6d22b157b09c08ce1f7c18"
  },
  {
    "url": "assets/css/0.styles.9e28097e.css",
    "revision": "d557ac3849ff5c600ae19ee8c5094822"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e2db811a.js",
    "revision": "1210833f0e64b768f60fcb1f9eb6efdf"
  },
  {
    "url": "assets/js/11.20c927cb.js",
    "revision": "406feba6dfcec4f2cc47d36bf0a5cc7f"
  },
  {
    "url": "assets/js/12.b8bbc84d.js",
    "revision": "1f39e757ad3e215939e84a06ed7d3dee"
  },
  {
    "url": "assets/js/13.d3b5b17d.js",
    "revision": "80b4127ee90ae9e485ab5765d099f874"
  },
  {
    "url": "assets/js/2.57178c12.js",
    "revision": "853189631fe508491c8d2e70a6437d88"
  },
  {
    "url": "assets/js/3.a723a3b8.js",
    "revision": "3f2a2bc1d2a722496be183063b96c789"
  },
  {
    "url": "assets/js/4.41643750.js",
    "revision": "bd87ad9c5214c5898342a025f32f070e"
  },
  {
    "url": "assets/js/5.6cb0a696.js",
    "revision": "b7b322cb99d7ec7fad399d298ade60c1"
  },
  {
    "url": "assets/js/6.e894c442.js",
    "revision": "1964c34912116179c683653f4c0efa4d"
  },
  {
    "url": "assets/js/7.4801d11f.js",
    "revision": "a3ce97541fc6f2a6be1a70647cdb1bdf"
  },
  {
    "url": "assets/js/8.facb2702.js",
    "revision": "313efee6c1805ad34880ff5b156345c0"
  },
  {
    "url": "assets/js/9.8949fce8.js",
    "revision": "5b82a0c384b0de36b3a26b7771041334"
  },
  {
    "url": "assets/js/app.5437de36.js",
    "revision": "66df64474efe8653b0b772395a75f1f8"
  },
  {
    "url": "home.jpg",
    "revision": "23b4b97e449151deed7ed97a61d015b3"
  },
  {
    "url": "index.html",
    "revision": "e996c3b06be06b8c0439271a2cdb87e0"
  },
  {
    "url": "interview/css/index.html",
    "revision": "510d2306accb83d0ffdc0ae427e161b2"
  },
  {
    "url": "interview/css/path.html",
    "revision": "d104c85f16de0cdcc36abd5913e0d8d8"
  },
  {
    "url": "interview/html/index.html",
    "revision": "602eb8905ff79f710656a3ec078755d0"
  },
  {
    "url": "interview/html/path.html",
    "revision": "1a4bbabefb8095ef6641989157157082"
  },
  {
    "url": "interview/index.html",
    "revision": "22a1264d0399d387296d4422c2772292"
  },
  {
    "url": "webframe/index.html",
    "revision": "d320182fb7192850e254c44b588ebb57"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
