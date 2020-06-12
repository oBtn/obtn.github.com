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
    "revision": "181ca6d2693fb6c85ec5417e8b2a60e8"
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
    "url": "assets/js/10.d40177c9.js",
    "revision": "793b6c7fb14dcd8e67592d0f32a12195"
  },
  {
    "url": "assets/js/11.a7ff7283.js",
    "revision": "3701cf712670398af9e63de8bbf62bb0"
  },
  {
    "url": "assets/js/12.901eb195.js",
    "revision": "69b2f133403cfc2b768d74f1ddce94b1"
  },
  {
    "url": "assets/js/13.15da9c87.js",
    "revision": "d5b4b26153010cc9f1fc4e5873251067"
  },
  {
    "url": "assets/js/14.87359e8c.js",
    "revision": "ef05a89ca89d2de3a400003581d700c4"
  },
  {
    "url": "assets/js/15.84ea580b.js",
    "revision": "450fcc2dc91daa2d63e1fa30659cc2ef"
  },
  {
    "url": "assets/js/2.bf14f5c3.js",
    "revision": "5685ec7bff39a5fbec1d8ab082ea5f2f"
  },
  {
    "url": "assets/js/3.2451efdd.js",
    "revision": "3c80008c6a35856015b338f483824f20"
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
    "url": "assets/js/6.8676467c.js",
    "revision": "8c94d5cb543725e2fdcdf31827d1cda2"
  },
  {
    "url": "assets/js/7.a49fa6fc.js",
    "revision": "8c913522938609e567f0c5c11d2bbf59"
  },
  {
    "url": "assets/js/8.2efa3f2e.js",
    "revision": "660bb20b2b8d0018e375525ca60fd0ca"
  },
  {
    "url": "assets/js/9.038443c3.js",
    "revision": "d5193dd8481d67949f3914b92dbb071e"
  },
  {
    "url": "assets/js/app.a7373f9b.js",
    "revision": "422679bf8a07ad4183afadc69d65888a"
  },
  {
    "url": "home.jpg",
    "revision": "23b4b97e449151deed7ed97a61d015b3"
  },
  {
    "url": "index.html",
    "revision": "35c36c1d0c702ad377ffe6bd7747bb11"
  },
  {
    "url": "interview/css.html",
    "revision": "c01b1412e26bf67f6e16cb6c7b75a229"
  },
  {
    "url": "interview/index.html",
    "revision": "abb8a1941dad1b501d463f86c21cf39e"
  },
  {
    "url": "interview/js10.html",
    "revision": "c9f591465a9e45df85ac8b3f06f2722d"
  },
  {
    "url": "interview/notes.html",
    "revision": "18d9d6b9d0b6107588e9136840c25dcd"
  },
  {
    "url": "interview/rewriteJs.html",
    "revision": "92b8101087adf8b9c2f11f28123b6d48"
  },
  {
    "url": "interview/vue.html",
    "revision": "fc907de687661a9e6580f15f37b07758"
  },
  {
    "url": "webframe/index.html",
    "revision": "e4b93ef456a41388ecaf9d47c7ded597"
  },
  {
    "url": "webframe/vue/messageWays.html",
    "revision": "a298d841039c91106badad21530b7be3"
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
