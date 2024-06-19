(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t);var o={};e.r(o),e.d(o,{collectionData:()=>s,getHTML:()=>a,reloadSiteBundle:()=>i,reloadSquarespaceLifecycle:()=>l});var n={};e.r(n),e.d(n,{debounce:()=>u,deepMerge:()=>m,emitEvent:()=>p,parseAttr:()=>b,throttle:()=>d});var r={};async function a(e,t="main#page"){try{const o=await fetch(e);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const n=await o.text();return(new DOMParser).parseFromString(n,"text/html").querySelector(t).innerHTML}catch(e){return console.error("Error fetching URL:",e),""}}e.r(r),e.d(r,{initializeAllPlugins:()=>h,initializeTabsPlugin:()=>f});const c={portfolio:"portfolio",store:"store",blog:"blog",event:"event",lessons:"video",course:"course"};async function s(e){const t=[];let o=null,n=null,r=null;const s=async e=>{try{const i=await async function(e){const t=e.includes("?")?`${e}&cb=${Date.now()}`:`${e}?cb=${Date.now()}`,o=await fetch(t);if(!o.ok)throw new Error(`Fetch error: ${o.statusText}`);return o.json()}(e),l=i.items;o=i.collection,n=i.website,r=function(e){for(const t in c)if(e.includes(t))return c[t];return null}(o.typeLabel),l.length&&"portfolio-item"===l[0].recordTypeLabel&&await async function(e){const t=e.map((e=>a(`${e.fullUrl}?cb=${Date.now()}`))),o=await Promise.all(t);e.forEach(((e,t)=>e.body=o[t]))}(l),t.push(...l),i.pagination?.nextPage&&await s(i.pagination.nextPageUrl+"&format=json&cb="+Date.now())}catch(e){throw console.error("Fetch operation failed:",e),e}};try{return await s(e+"?format=json"),{collection:o,website:n,items:t,type:r}}catch(e){console.error("Error refreshing data:",e)}}async function i(){return new Promise(((e,t)=>{const o=document.querySelector('script[src*="https://static1.squarespace.com/static/vta"]');if(!o)return void t(new Error("Site bundle script not found"));const n=o.parentNode,r=o.nextSibling;n.removeChild(o);const a=document.createElement("script");a.src=o.src,a.async=!0,a.onload=e,a.onerror=t,r?n.insertBefore(a,r):n.appendChild(a)}))}async function l(e){const t=document.querySelectorAll("[data-controller]"),o=new Map;t.forEach((t=>{e.contains(t)||(o.set(t,t.getAttribute("data-controller")),t.removeAttribute("data-controller"))})),await i(),async function(e){const t=e.querySelectorAll(".page-section:has(.section-border .sqs-video-background-native)"),o=(e.querySelectorAll('.page-section:has(.section-border [data-config-url*="vimeo.com"])'),e.querySelectorAll('.page-section:has(.section-border [data-config-url*="youtube.com"])'),[...t,...e.querySelectorAll(".sqs-block-video:has(.native-video-player)")]);e.querySelectorAll('.sqs-block-video:has([data-html*="vimeo.com"])'),e.querySelectorAll('.sqs-block-video:has([data-html*="youtube.com"])'),o.length&&o.forEach((e=>{e.$wmPlay=()=>{const t=e.querySelector("video");t&&(t.play(),e.$wmVideoIsPlaying=!0)},e.$wmPause=()=>{const t=e.querySelector("video");t&&(t.pause(),e.$wmVideoIsPlaying=!1)}}))}(e),async function(e){document.querySelector("style#wm-shape-block-styles")||e.querySelector(".website-component-block")&&function(){const e=document.createElement("style");e.id="wm-shape-block-styles",e.type="text/css",e.appendChild(document.createTextNode('\n    .sqs-block[data-definition-name="website.components.shape"] svg.sqs-shape {\n      fill: var(--shape-block-background-color);\n      stroke: var(--shape-block-stroke-color);\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape-rectangle {\n      background: var(--shape-block-background-color);\n      border-color: var(--shape-block-stroke-color);\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-content,\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-alignment-wrapper {\n      height: 100%;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-alignment-wrapper {\n      display: flex;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape {\n      display: block;\n      position: absolute;\n      overflow: visible;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape-block-container {\n      position: relative;\n      color: var(--shape-block-dropshadow-color);\n    }')),document.head.appendChild(e)}()}(e),async function(e){const t=!!e.querySelectorAll(".sqs-add-to-cart-button").length,o=document.querySelectorAll(".sqs-add-to-cart-button");t&&(o.forEach((e=>{const t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)})),Y.Squarespace.Commerce.initializeCommerce())}(e),Squarespace.globalInit(Y,Y.all()),o.forEach(((e,t)=>{t.setAttribute("data-controller",e)}))}function u(e,t){let o;return function(...n){clearTimeout(o),o=setTimeout((()=>{clearTimeout(o),e.apply(this,n)}),t)}}function d(e,t){let o,n;return(...r)=>{const a=this;n?(clearTimeout(o),o=setTimeout((()=>{Date.now()-n>=t&&(e.apply(a,r),n=Date.now())}),t-(Date.now()-n))):(e.apply(a,r),n=Date.now())}}function p(e,t={},o=document){if(!e)return;let n=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return o.dispatchEvent(n)}function b(e){if("true"===e)return!0;if("false"===e)return!1;const t=parseFloat(e);return isNaN(t)||t.toString()!==e?e:t}function m(...e){function t(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function o(e,n){for(let[r,a]of Object.entries(n)){let n=t(a);"object"===n||"array"===n?(void 0===e[r]&&(e[r]="object"===n?{}:[]),o(e[r],a)):e[r]=a}}if(0===e.length)return{};let n={};return e.forEach((e=>{o(n,e)})),n}function f(){window.wmTabs&&"function"==typeof window.wmTabs.init?window.wmTabs.init():console.warn("wmTabs Plugin isn't available. Purchase the plugin ")}function h(){f()}const w={...o,...n,...r};window.wm$=w,window.wmToolkit=t})();