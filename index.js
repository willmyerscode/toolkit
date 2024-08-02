(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);var o={};e.r(o),e.d(o,{collectionData:()=>s,getFragment:()=>c,getHTML:()=>a,initializeCodeBlocks:()=>d,initializeThirdPartyPlugins:()=>f,reloadSiteBundle:()=>l,reloadSquarespaceLifecycle:()=>u});var n={};e.r(n),e.d(n,{debounce:()=>m,deepMerge:()=>g,emitEvent:()=>h,parseAttr:()=>y,throttle:()=>w});var r={};async function a(e,t="main#page"){try{const o=await fetch(e);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const n=await o.text();return(new DOMParser).parseFromString(n,"text/html").querySelector(t).innerHTML}catch(e){return console.error("Error fetching URL:",e),""}}e.r(r),e.d(r,{initializeAllPlugins:()=>q,initializeTabsPlugin:()=>S});const i={portfolio:"portfolio",store:"store",blog:"blog",event:"event",lessons:"video",course:"course"};async function s(e){const t=[];let o=null,n=null,r=null;const s=async e=>{try{const c=await async function(e){const t=e.includes("?")?`${e}&cb=${Date.now()}`:`${e}?cb=${Date.now()}`,o=await fetch(t);if(!o.ok)throw new Error(`Fetch error: ${o.statusText}`);return o.json()}(e),l=c.items;o=c.collection,n=c.website,r=function(e){for(const t in i)if(e.includes(t))return i[t];return null}(o.typeLabel),l.length&&"portfolio-item"===l[0].recordTypeLabel&&await async function(e){const t=e.map((e=>a(`${e.fullUrl}?cb=${Date.now()}`))),o=await Promise.all(t);e.forEach(((e,t)=>e.body=o[t]))}(l),t.push(...l),c.pagination?.nextPage&&await s(c.pagination.nextPageUrl+"&format=json&cb="+Date.now())}catch(e){throw console.error("Fetch operation failed:",e),e}};try{return await s(e+"?format=json"),{collection:o,website:n,items:t,type:r}}catch(e){console.error("Error refreshing data:",e)}}async function c(e,t="main#page"){try{const o=await fetch(e);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const n=await o.text();return(new DOMParser).parseFromString(n,"text/html").querySelector(t)}catch(e){return console.error("Error fetching URL:",e),""}}async function l(){return new Promise(((e,t)=>{const o=document.querySelector('script[src*="https://static1.squarespace.com/static/vta"]');if(!o)return void t(new Error("Site bundle script not found"));const n=o.parentNode,r=o.nextSibling;n.removeChild(o);const a=document.createElement("script");a.src=o.src,a.async=!0,a.onload=e,a.onerror=t,r?n.insertBefore(a,r):n.appendChild(a)}))}async function u(e=document){if(void 0===window.Squarespace||void 0===window.Y)return void console.warn("Squarespace or Y is not available on the window object. Aborting reloadSquarespaceLifecycle.");const t=Array.isArray(e)?e:[e],o=document.querySelectorAll("[data-controller]"),n=new Map;o.forEach((e=>{t.some((t=>t.contains(e)))||(n.set(e,e.getAttribute("data-controller")),e.removeAttribute("data-controller"))})),await l(),t.forEach((e=>{!async function(e){const t=e.querySelectorAll(".page-section:has(.section-border .sqs-video-background-native)"),o=(e.querySelectorAll('.page-section:has(.section-border [data-config-url*="vimeo.com"])'),e.querySelectorAll('.page-section:has(.section-border [data-config-url*="youtube.com"])'),[...t,...e.querySelectorAll(".sqs-block-video:has(.native-video-player)")]);e.querySelectorAll('.sqs-block-video:has([data-html*="vimeo.com"])'),e.querySelectorAll('.sqs-block-video:has([data-html*="youtube.com"])'),o.length&&o.forEach((e=>{e.$wmPlay=()=>{const t=e.querySelector("video");t&&(t.play(),e.$wmVideoIsPlaying=!0)},e.$wmPause=()=>{const t=e.querySelector("video");t&&(t.pause(),e.$wmVideoIsPlaying=!1)}}))}(e),async function(e){document.querySelector("style#wm-shape-block-styles")||e.querySelector(".website-component-block")&&function(){const e=document.createElement("style");e.id="wm-shape-block-styles",e.type="text/css",e.appendChild(document.createTextNode('\n    .sqs-block[data-definition-name="website.components.shape"] svg.sqs-shape {\n      fill: var(--shape-block-background-color);\n      stroke: var(--shape-block-stroke-color);\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape-rectangle {\n      background: var(--shape-block-background-color);\n      border-color: var(--shape-block-stroke-color);\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-content,\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-alignment-wrapper {\n      height: 100%;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-alignment-wrapper {\n      display: flex;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape {\n      display: block;\n      position: absolute;\n      overflow: visible;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape-block-container {\n      position: relative;\n      color: var(--shape-block-dropshadow-color);\n    }')),document.head.appendChild(e)}()}(e),async function(e){const t=e.querySelectorAll(".sqs-add-to-cart-button");if(!(t.length>0))return;const o=document.querySelectorAll('[data-afterpay="true"]'),n=window.Static?.SQUARESPACE_CONTEXT,r=n?.websiteSettings?.storeSettings?.merchandisingSettings?.displayNativeProductReviewsEnabled;t.forEach((e=>{const t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)})),o.forEach((e=>e.removeAttribute("data-afterpay"))),n?.websiteSettings?.storeSettings?.merchandisingSettings&&(n.websiteSettings.storeSettings.merchandisingSettings.displayNativeProductReviewsEnabled=!1),"undefined"!=typeof Y&&Y.Squarespace&&Y.Squarespace.Commerce?Y.Squarespace.Commerce.initializeCommerce():console.warn("Squarespace Commerce object not found. Commerce initialization skipped."),o.forEach((e=>e.setAttribute("data-afterpay","true"))),n?.websiteSettings?.storeSettings?.merchandisingSettings&&(n.websiteSettings.storeSettings.merchandisingSettings.displayNativeProductReviewsEnabled=r)}(e),Squarespace.initializeWebsiteComponent(Y,Y.one(e))})),Squarespace.globalInit(Y,Y.all()),n.forEach(((e,t)=>{t.setAttribute("data-controller",e)}))}async function d(e){const t=e.querySelectorAll(".sqs-block-code");for(const e of t){const t=e.querySelectorAll("script");for(const e of t)e.src?await b(e):p(e)}}function p(e){try{const t=document.createElement("script");t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}catch(e){console.error("Error executing inline script:",e)}}function b(e){return new Promise(((t,o)=>{const n=document.createElement("script");n.src=e.src,n.onload=t,n.onerror=o;for(const t of e.attributes)"src"!==t.name&&n.setAttribute(t.name,t.value);e.parentNode.replaceChild(n,e)}))}async function f(e){e.querySelector('a[href*="#lightbox"]')&&"function"==typeof window.pluginLightbox&&window.pluginLightbox()}function m(e,t){let o;return function(...n){clearTimeout(o),o=setTimeout((()=>{clearTimeout(o),e.apply(this,n)}),t)}}function w(e,t){let o,n;return(...r)=>{const a=this;n?(clearTimeout(o),o=setTimeout((()=>{Date.now()-n>=t&&(e.apply(a,r),n=Date.now())}),t-(Date.now()-n))):(e.apply(a,r),n=Date.now())}}function h(e,t={},o=document){if(!e)return;let n=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return o.dispatchEvent(n)}function y(e){if("true"===e)return!0;if("false"===e)return!1;const t=parseFloat(e);return isNaN(t)||t.toString()!==e?e:t}function g(...e){function t(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function o(e,n){for(let[r,a]of Object.entries(n)){let n=t(a);"object"===n||"array"===n?(void 0===e[r]&&(e[r]="object"===n?{}:[]),o(e[r],a)):e[r]=a}}if(0===e.length)return{};let n={};return e.forEach((e=>{o(n,e)})),n}function S(){window.wmTabs&&"function"==typeof window.wmTabs.init&&window.wmTabs.init()}function q(){S()}const v={...o,...n,...r};window.wm$=v,window.wmToolkit=t})();
