if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const d=e=>s(e,c),l={module:{uri:c},exports:o,require:d};i[c]=Promise.all(r.map((e=>l[e]||d(e)))).then((e=>(n(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/App-4UHYcWqv.js",revision:null},{url:"assets/index-KK-KX-mj.js",revision:null},{url:"assets/index-wT3Hxb2O.js",revision:null},{url:"assets/Root-oA3xlVQv.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"index.html",revision:"ba6e1cca54b89cecec75e4dd2095f39a"},{url:"test.html",revision:"ffe1f4ee4a321d6b0028c83100b1b429"},{url:"apple-touch-icon.png",revision:"2807d81ce8119f9e536942f98c53b9a1"},{url:"cover.jpg",revision:"06f046bc7f959ff00e01b3057cf47e71"},{url:"favicon.jpg",revision:"fec6bbd9dc743860346b17d102b1dec4"},{url:"pwa-192x192.png",revision:"addd7a1d51ac8afec8ed9c97cc9e2b7e"},{url:"pwa-512x512.png",revision:"f507d6e008a5720e4cfb8576151089e4"},{url:"favicon.jpg",revision:"fec6bbd9dc743860346b17d102b1dec4"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"2807d81ce8119f9e536942f98c53b9a1"},{url:"cover.jpg",revision:"06f046bc7f959ff00e01b3057cf47e71"},{url:"pwa-192x192.png",revision:"addd7a1d51ac8afec8ed9c97cc9e2b7e"},{url:"pwa-512x512.png",revision:"f507d6e008a5720e4cfb8576151089e4"},{url:"manifest.webmanifest",revision:"d8a2eac78cddff8b8eca42d4320c4071"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
