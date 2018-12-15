importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0da22e343b979b2c2d56.js",
    "revision": "27b56f923267ce7a473c9b864f201aa2"
  },
  {
    "url": "/_nuxt/1889b4156e1ee277400a.js",
    "revision": "9b07574c1fbe6196b6d4b4d6c6c1693b"
  },
  {
    "url": "/_nuxt/199a3a63abaf749e2ccd.js",
    "revision": "18183a7a96fcef8f56b7a7ca4825d47a"
  },
  {
    "url": "/_nuxt/26cd9e6a58372e17ab5a.js",
    "revision": "c5bce28e16a766a59c2afbdce9505cb5"
  },
  {
    "url": "/_nuxt/3c03de0546b2b6c8e224.js",
    "revision": "6b78d3c28da72d93bafe49c0c4835f0f"
  },
  {
    "url": "/_nuxt/4a629b17b5f271a8656b.js",
    "revision": "c5ba921b52f82585df5bcc755c720acd"
  },
  {
    "url": "/_nuxt/7e7b8811f67966a3792c.js",
    "revision": "b061eceb2874a4f79d6c1559ce0c33cf"
  },
  {
    "url": "/_nuxt/b7d44b90453e36bbfbdd.js",
    "revision": "617ee2a6c9b38dae89478923cb3ac5d7"
  },
  {
    "url": "/_nuxt/c403c70232a0342ac8c3.js",
    "revision": "8ffb1bc6106930ed8c6bc1cccc0be119"
  },
  {
    "url": "/_nuxt/f18ca9f57f6bd4beb4f5.js",
    "revision": "b10da67f0649441d06704540da799aeb"
  }
], {
  "cacheId": "mde-js-site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
