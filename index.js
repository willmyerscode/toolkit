!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.wmToolkit=t():e.wmToolkit=t()}(this,(()=>(()=>{"use strict";var e={156:function(e,t,o){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,o=1,n=arguments.length;o<n;o++)for(var r in t=arguments[o])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},n.apply(this,arguments)},r=this&&this.__createBinding||(Object.create?function(e,t,o,n){void 0===n&&(n=o);var r=Object.getOwnPropertyDescriptor(t,o);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[o]}}),Object.defineProperty(e,n,r)}:function(e,t,o,n){void 0===n&&(n=o),e[n]=t[o]}),s=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&r(t,e,o);return s(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var a,c=i(o(212)),l=i(o(814)),u=i(o(891)),d="1.0.1";t.default=(a=n(n(n(n({},c),l),u),{version:d}),void 0!==window.wm$&&window.wm$.version&&window.wm$.version>d?window.wm$:(window.wm$=a,a))},52:function(e,t){var o=this&&this.__awaiter||function(e,t,o,n){return new(o||(o=Promise))((function(r,s){function i(e){try{c(n.next(e))}catch(e){s(e)}}function a(e){try{c(n.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,a)}c((n=n.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var o,n,r,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]},i=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return i.next=a(0),i.throw=a(1),i.return=a(2),"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(o)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(s=0)),s;)try{if(o=1,n&&(r=2&a[0]?n.return:a[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,a[1])).done)return r;switch(n=0,r&&(a=[2&a[0],r.value]),a[0]){case 0:case 1:r=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,n=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!((r=(r=s.trys).length>0&&r[r.length-1])||6!==a[0]&&2!==a[0])){s=0;continue}if(3===a[0]&&(!r||a[1]>r[0]&&a[1]<r[3])){s.label=a[1];break}if(6===a[0]&&s.label<r[1]){s.label=r[1],r=a;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(a);break}r[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(e){a=[6,e],n=0}finally{o=r=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getFragment=function(e){return o(this,arguments,void 0,(function(e,t){var o,r,s,i;return void 0===t&&(t="main#page"),n(this,(function(n){switch(n.label){case 0:return n.trys.push([0,3,,4]),[4,fetch(e)];case 1:if(!(o=n.sent()).ok)throw new Error("HTTP error! status: ".concat(o.status));return[4,o.text()];case 2:return r=n.sent(),s=new DOMParser,[2,s.parseFromString(r,"text/html").querySelector(t)];case 3:return i=n.sent(),console.error("Error fetching URL:",i),[2,null];case 4:return[2]}}))}))}},179:(e,t)=>{Object.defineProperty(t,"B",{value:!0}),t.s=function(e,t){var o;return function(){for(var n=this,r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];clearTimeout(o),o=setTimeout((function(){clearTimeout(o),e.apply(n,r)}),t)}}},294:(e,t,o)=>{o.d(t,{x:()=>s});var n=o(521);const r={portfolio:"portfolio",store:"store",blog:"blog",event:"event",lessons:"video",course:"course"};async function s(e){const t=[];let o=null,s=null,i=null;const a=async e=>{try{const c=await async function(e){const t=e.includes("?")?`${e}&cb=${Date.now()}`:`${e}?cb=${Date.now()}`,o=await fetch(t);if(!o.ok)throw new Error(`Fetch error: ${o.statusText}`);return o.json()}(e),l=c.items;o=c.collection,s=c.website,i=function(e){for(const t in r)if(e.includes(t))return r[t];return null}(o.typeLabel),l.length&&"portfolio-item"===l[0].recordTypeLabel&&await async function(e){const t=e.map((e=>{const t=`${e.fullUrl}?cb=${Date.now()}`;return(0,n.e)(t)})),o=await Promise.all(t);e.forEach(((e,t)=>e.body=o[t]))}(l),t.push(...l),c.pagination?.nextPage&&await a(c.pagination.nextPageUrl+"&format=json&cb="+Date.now())}catch(e){throw console.error("Fetch operation failed:",e),e}};try{return await a(e+"?format=json"),{collection:o,website:s,items:t,type:i}}catch(e){console.error("Error refreshing data:",e)}}},521:(e,t,o)=>{async function n(e,t="main#page"){try{const o=await fetch(e);if(!o.ok)throw new Error(`HTTP error! status: ${o.status}`);const n=await o.text();return(new DOMParser).parseFromString(n,"text/html").querySelector(t).innerHTML}catch(e){return console.error("Error fetching URL:",e),""}}o.d(t,{e:()=>n})},901:(e,t,o)=>{o.d(t,{s:()=>r});const n=['[data-section-theme="white"]','[data-section-theme="white-bold"]','[data-section-theme="light"]','[data-section-theme="light-bold"]','[data-section-theme="bright"]','[data-section-theme="bright-inverse"]','[data-section-theme="dark"]','[data-section-theme="dark-bold"]','[data-section-theme="black"]','[data-section-theme="black-bold"]'];async function r(){try{const e=await fetch("/site.css"),t=await e.text(),o=new CSSStyleSheet;o.replaceSync(t);const r=new Set;for(const e of o.cssRules)e.selectorText&&n.forEach((t=>{e.selectorText.includes(t)&&r.add(t)}));const s=n.find((e=>!r.has(e)));let i=0,a="";for(const e of o.cssRules)if(e.selectorText&&e.selectorText.startsWith(":root")&&(i++,2===i)){for(let t=0;t<e.style.length;t++){const o=e.style[t];a+=`${o}: ${e.style.getPropertyValue(o)}; `}break}if(i<2&&console.log("There is no second :root rule in the stylesheet."),s){const e=new CSSStyleSheet;e.insertRule(`:root, ${s} { ${a} }`,0);let t="";for(const o of e.cssRules)t+=o.cssText+"\n";const o=document.createElement("style");o.textContent=t;const n=document.querySelector('link[href$="site.css"]');n?n.parentNode.insertBefore(o,n):console.error("Could not find the existing stylesheet link element.")}else console.log("All expected selectors are present in the stylesheet.")}catch(e){console.error("Error processing stylesheet:",e)}}},212:(e,t,o)=>{o.r(t),o.d(t,{collectionData:()=>n.x,getHTML:()=>r.e,handleAddingMissingColorTheme:()=>f.s,initializeCodeBlocks:()=>l.g,initializeEmbedBlocks:()=>u.k,initializeShapeBlocks:()=>p.k,initializeThirdPartyPlugins:()=>d.Y,reloadSiteBundle:()=>a.b,reloadSquarespaceLifecycle:()=>c.D});var n=o(294),r=o(521),s=o(52),i={};for(const e in s)["default","collectionData","getHTML"].indexOf(e)<0&&(i[e]=()=>s[e]);o.d(t,i);var a=o(424),c=o(812),l=o(815),u=o(369),d=o(739),f=o(901),p=o(937)},815:(e,t,o)=>{async function n(e){const t=e.querySelectorAll(".sqs-block-code");for(const e of t){const t=e.querySelectorAll("script");for(const e of t)e.src?await s(e):r(e)}}function r(e){try{const t=document.createElement("script");t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}catch(e){console.error("Error executing inline script:",e)}}function s(e){return new Promise(((t,o)=>{const n=document.createElement("script");n.src=e.src,n.onload=t,n.onerror=o;for(const t of e.attributes)"src"!==t.name&&n.setAttribute(t.name,t.value);e.parentNode.replaceChild(n,e)}))}o.d(t,{g:()=>n})},369:(e,t,o)=>{async function n(e){const t=e.querySelectorAll(".sqs-block-embed");for(const e of t)await r(e)}async function r(e){const t=e.getAttribute("data-block-json");if(t)try{const o=JSON.parse(t).html;if(!o)return void console.error("No HTML content found in the JSON data");const n=document.createElement("div");n.innerHTML=o,e.innerHTML="",e.appendChild(n);const r=n.querySelectorAll("script");for(const e of r)e.src?await i(e):s(e)}catch(e){console.error("Error processing the embed block:",e)}else console.error("No data-block-json attribute found")}function s(e){try{const t=document.createElement("script");t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}catch(e){console.error("Error executing inline script:",e)}}function i(e){return new Promise(((t,o)=>{const n=document.createElement("script");n.src=e.src,n.onload=t,n.onerror=o;for(const t of e.attributes)"src"!==t.name&&n.setAttribute(t.name,t.value);e.parentNode.replaceChild(n,e)}))}o.d(t,{k:()=>n})},937:(e,t,o)=>{async function n(e){function t(e,t){const o=e.clientWidth,n=e.clientHeight;e.offsetWidth/e.offsetHeight>1?(t.style.height="100%",t.style.width=`${n}px`):(t.style.width="100%",t.style.height=`${o}px`)}document.querySelector("style#wm-shape-block-styles")||e.querySelector(".website-component-block")&&(function(){const e=document.createElement("style");e.id="wm-shape-block-styles",e.type="text/css",e.appendChild(document.createTextNode('\n    .sqs-block[data-definition-name="website.components.shape"] svg.sqs-shape {\n      fill: var(--shape-block-background-color);\n      stroke: var(--shape-block-stroke-color);\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape-rectangle {\n      background: var(--shape-block-background-color);\n      border-color: var(--shape-block-stroke-color);\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-content,\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-alignment-wrapper {\n      height: 100%;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-alignment-wrapper {\n      display: flex;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape {\n      display: block;\n      position: absolute;\n      overflow: visible;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape-block-container {\n      position: relative;\n      color: var(--shape-block-dropshadow-color);\n    }')),document.head.appendChild(e)}(),e.querySelectorAll(".sqs-block-website-component .sqs-shape-block-container[data-stretched-to-fill]").forEach((e=>{const t=e.firstElementChild;t&&(t.style.height="100%",t.style.width="100%",t instanceof SVGElement&&t.setAttribute("preserveAspectRatio","none"))})),e.querySelectorAll(".sqs-block-website-component .sqs-shape-block-container:not([data-stretched-to-fill])").forEach((e=>{const o=e.firstElementChild;o&&(t(e,o),new ResizeObserver((()=>{t(e,o)})).observe(e))})),e.querySelectorAll(".sqs-block-website-component .sqs-shape-block-container[data-drop-shadow]").forEach((e=>{const t=e.closest(".fe-block");if(!t)return;const o=e.getAttribute("data-drop-shadow"),n=JSON.parse(o);if(!n)return;const r=(n.angle-90)*(Math.PI/180),s=n.distance.value,i=n.distance.unit,a=Math.cos(r)*s,c=Math.sin(r)*s,l=n.blur.value,u=n.blur.unit,d=function(e){switch(e.type){case"SITE_PALETTE_COLOR":return`hsla(var(--${e.sitePaletteColor.colorName}-hsl), ${e.sitePaletteColor.alphaModifier})`;case"CUSTOM_COLOR":const{hue:t,saturation:o,lightness:n,alpha:r}=e.customColor.hslaValue;return`hsla(${t}, ${100*o}%, ${100*n}%, ${r})`;default:return"hsla(var(--shape-block-dropshadow-color-hsl), 1)"}}(n.color);t.style.filter=`drop-shadow(${a}${i} ${c}${i} ${l}${u} ${d})`})),e.querySelectorAll(".sqs-block-website-component .sqs-shape-block-container[data-blend-mode]").forEach((e=>{const t=e.closest(".fe-block");t&&(t.style.mixBlendMode=e.getAttribute("data-blend-mode"))})))}o.d(t,{k:()=>n})},739:(e,t,o)=>{async function n(e){e.querySelector('a[href*="#lightbox"]')&&"function"==typeof window.pluginLightbox&&window.pluginLightbox()}o.d(t,{Y:()=>n})},424:(e,t,o)=>{async function n(){return new Promise(((e,t)=>{const o=document.querySelector('script[src*="https://static1.squarespace.com/static/vta"]');if(!o)return void t(new Error("Site bundle script not found"));const n=o.parentNode,r=o.nextSibling;n.removeChild(o);const s=document.createElement("script");s.src=o.src,s.async=!0,s.onload=e,s.onerror=t,r?n.insertBefore(s,r):n.appendChild(s)}))}o.d(t,{b:()=>n})},812:(e,t,o)=>{o.d(t,{D:()=>i});var n=o(424),r=o(937),s=o(504);async function i(e=document){const t=Array.isArray(e)?e:[e];if(t.forEach((e=>{(0,s.W)(e)})),void 0===window.Squarespace||void 0===window.Y)return void console.warn("Squarespace or Y is not available on the window object. Aborting reloadSquarespaceLifecycle.");const o=document.querySelectorAll("[data-controller]"),i=new Map;o.forEach((e=>{t.some((t=>t.contains(e)))||(i.set(e,e.getAttribute("data-controller")),e.removeAttribute("data-controller"))})),await(0,n.b)(),t.forEach((e=>{!async function(e){const t=e.querySelectorAll(".page-section:has(.section-border .sqs-video-background-native)"),o=(e.querySelectorAll('.page-section:has(.section-border [data-config-url*="vimeo.com"])'),e.querySelectorAll('.page-section:has(.section-border [data-config-url*="youtube.com"])'),[...t,...e.querySelectorAll(".sqs-block-video:has(.native-video-player)")]);e.querySelectorAll('.sqs-block-video:has([data-html*="vimeo.com"])'),e.querySelectorAll('.sqs-block-video:has([data-html*="youtube.com"])'),o.length&&o.forEach((e=>{e.$wmPlay=()=>{const t=e.querySelector("video");t&&(t.play(),e.$wmVideoIsPlaying=!0)},e.$wmPause=()=>{const t=e.querySelector("video");t&&(t.pause(),e.$wmVideoIsPlaying=!1)}}))}(e),(0,r.k)(e),async function(e){const t=e.querySelectorAll(".sqs-add-to-cart-button");if(!(t.length>0))return;const o=document.querySelectorAll('[data-afterpay="true"]'),n=window.Static?.SQUARESPACE_CONTEXT,r=n?.websiteSettings?.storeSettings?.merchandisingSettings?.displayNativeProductReviewsEnabled;t.forEach((e=>{const t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)})),o.forEach((e=>e.removeAttribute("data-afterpay"))),n?.websiteSettings?.storeSettings?.merchandisingSettings&&(n.websiteSettings.storeSettings.merchandisingSettings.displayNativeProductReviewsEnabled=!1),"undefined"!=typeof Y&&Y.Squarespace&&Y.Squarespace.Commerce?Y.Squarespace.Commerce.initializeCommerce():console.warn("Squarespace Commerce object not found. Commerce initialization skipped."),o.forEach((e=>e.setAttribute("data-afterpay","true"))),n?.websiteSettings?.storeSettings?.merchandisingSettings&&(n.websiteSettings.storeSettings.merchandisingSettings.displayNativeProductReviewsEnabled=r)}(e),Squarespace.initializeWebsiteComponent(Y,Y.one(e))})),Squarespace.globalInit(Y,Y.all()),i.forEach(((e,t)=>{t.setAttribute("data-controller",e)}))}},814:(e,t,o)=>{o.r(t),o.d(t,{__esModule:()=>n.B,debounce:()=>n.s,deepMerge:()=>a,emitEvent:()=>s,parseAttr:()=>i,throttle:()=>r});var n=o(179);function r(e,t){let o,n;return(...r)=>{const s=this;n?(clearTimeout(o),o=setTimeout((()=>{Date.now()-n>=t&&(e.apply(s,r),n=Date.now())}),t-(Date.now()-n))):(e.apply(s,r),n=Date.now())}}function s(e,t={},o=document){if(!e)return;let n=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return o.dispatchEvent(n)}function i(e){if("true"===e)return!0;if("false"===e)return!1;const t=parseFloat(e);return isNaN(t)||t.toString()!==e?e:t}function a(...e){function t(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function o(e,n){for(let[r,s]of Object.entries(n)){let n=t(s);"object"===n||"array"===n?(void 0===e[r]&&(e[r]="object"===n?{}:[]),o(e[r],s)):e[r]=s}}if(0===e.length)return{};let n={};return e.forEach((e=>{o(n,e)})),n}},891:(e,t,o)=>{function n(){window.wmTabs&&"function"==typeof window.wmTabs.init&&window.wmTabs.init()}function r(){n(),window.wmInitVerticalTimeline&&"function"==typeof window.wmInitVerticalTimeline&&window.wmInitVerticalTimeline(),window.sk_applyPresets&&sk_applyPresets()}o.r(t),o.d(t,{initializeAllPlugins:()=>r,initializeTabsPlugin:()=>n,setImageFocalPoints:()=>s.W});var s=o(504)},504:(e,t,o)=>{function n(e=document){e.querySelectorAll("img[data-image-focal-point]").forEach((e=>{const t=e.getAttribute("data-image-focal-point");if(t){const[o,n]=t.split(",").map(Number),r=`${100*o}% ${100*n}%`;e.style.setProperty("--wm-focal-point",r)}}))}o.d(t,{W:()=>n})}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,o),s.exports}return o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o(156)})()));
