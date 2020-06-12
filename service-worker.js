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
    "revision": "d34be63db9434a0b218d2d2f5e7945bc"
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
    "url": "assets/js/11.d84cc9cd.js",
    "revision": "7fcd7e2c63742ab643911f6816aa3be1"
  },
  {
    "url": "assets/js/12.0afb35e6.js",
    "revision": "7b0c6991d1701ba5687ed5b35cd02017"
  },
  {
    "url": "assets/js/13.15da9c87.js",
    "revision": "d5b4b26153010cc9f1fc4e5873251067"
  },
  {
    "url": "assets/js/14.2827031f.js",
    "revision": "35397095ad7aa7e14ac7016fe32841e6"
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
    "url": "assets/js/7.b4b61d14.js",
    "revision": "052605c120aec985a2fdb315ca0b9b33"
  },
  {
    "url": "assets/js/8.b5197d57.js",
    "revision": "7f1825c75e2fcb91caecb1b5c3382cb2"
  },
  {
    "url": "assets/js/9.9c120bc4.js",
    "revision": "6cd7a94e5d81ea06690d253380ed7bcf"
  },
  {
    "url": "assets/js/app.6b6a02f5.js",
    "revision": "f3570186876b8a018d30d48d2f70dbfe"
  },
  {
    "url": "home.jpg",
    "revision": "23b4b97e449151deed7ed97a61d015b3"
  },
  {
    "url": "index.html",
    "revision": "535810b38edaefce06bd52ba7aad32a8"
  },
  {
    "url": "interview/css.html",
    "revision": "8ceedfb31821d974451b4c4931ee45b0"
  },
  {
    "url": "interview/index.html",
    "revision": "69c43c9b7bb1480590997ea4721820f8"
  },
  {
    "url": "interview/js10.html",
    "revision": "1bdd4dadcb34ecb1050f7a6056f8d104"
  },
  {
    "url": "interview/notes.html",
    "revision": "66ac91f328c440063a308240f37559c8"
  },
  {
    "url": "interview/rewriteJs.html",
    "revision": "75e581e1a795f447564bd1a290b74682"
  },
  {
    "url": "interview/vue.html",
    "revision": "a39d0221d340d28c6bc6298601193f98"
  },
  {
    "url": "webframe/index.html",
    "revision": "00cb3f568eb1b3548388e58b5f866f2d"
  },
  {
    "url": "webframe/vue/messageWays.html",
    "revision": "a7006fa6ff24cd903de07db297d5ef42"
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
