!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.wmToolkit=t():e.wmToolkit=t()}(this,(()=>(()=>{"use strict";var e={156:function(e,t,n){var o=this&&this.__assign||function(){return o=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,i)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var a,c=s(n(212)),l=s(n(814)),d=s(n(125)),u="1.0.1";t.default=(a=o(o(o(o({},c),l),d),{version:u}),void 0!==window.wm$&&window.wm$.version&&window.wm$.version>u?window.wm$:(window.wm$=a,a))},52:function(e,t){var n=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function s(e){try{c(o.next(e))}catch(e){r(e)}}function a(e){try{c(o.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,o,i,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]},s=Object.create(("function"==typeof Iterator?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(r=0)),r;)try{if(n=1,o&&(i=2&a[0]?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,o=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!((i=(i=r.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){r=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){r.label=a[1];break}if(6===a[0]&&r.label<i[1]){r.label=i[1],i=a;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(a);break}i[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e],o=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getFragment=function(e){return n(this,arguments,void 0,(function(e,t){var n,i,r,s;return void 0===t&&(t="main#page"),o(this,(function(o){switch(o.label){case 0:return o.trys.push([0,3,,4]),[4,fetch(e)];case 1:if(!(n=o.sent()).ok)throw new Error("HTTP error! status: ".concat(n.status));return[4,n.text()];case 2:return i=o.sent(),r=new DOMParser,[2,r.parseFromString(i,"text/html").querySelector(t)];case 3:return s=o.sent(),console.error("Error fetching URL:",s),[2,null];case 4:return[2]}}))}))}},179:(e,t)=>{Object.defineProperty(t,"B",{value:!0}),t.s=function(e,t){var n;return function(){for(var o=this,i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(n),n=setTimeout((function(){clearTimeout(n),e.apply(o,i)}),t)}}},294:(e,t,n)=>{n.d(t,{x:()=>r});var o=n(521);const i={portfolio:"portfolio",store:"store",blog:"blog",event:"event",lessons:"video",course:"course"};async function r(e){const t=[];let n=null,r=null,s=null;const a=async e=>{try{const c=await async function(e){const t=e.includes("?")?`${e}&cb=${Date.now()}`:`${e}?cb=${Date.now()}`,n=await fetch(t);if(!n.ok)throw new Error(`Fetch error: ${n.statusText}`);return n.json()}(e),l=c.items;n=c.collection,r=c.website,s=function(e){for(const t in i)if(e.includes(t))return i[t];return null}(n.typeLabel),l.length&&"portfolio-item"===l[0].recordTypeLabel&&await async function(e){const t=e.map((e=>{const t=`${e.fullUrl}?cb=${Date.now()}`;return(0,o.e)(t)})),n=await Promise.all(t);e.forEach(((e,t)=>e.body=n[t]))}(l),t.push(...l),c.pagination?.nextPage&&await a(c.pagination.nextPageUrl+"&format=json&cb="+Date.now())}catch(e){throw console.error("Fetch operation failed:",e),e}};try{return await a(e+"?format=json"),{collection:n,website:r,items:t,type:s}}catch(e){console.error("Error refreshing data:",e)}}},521:(e,t,n)=>{async function o(e,t="main#page"){try{const n=await fetch(e);if(!n.ok)throw new Error(`HTTP error! status: ${n.status}`);const o=await n.text();return(new DOMParser).parseFromString(o,"text/html").querySelector(t).innerHTML}catch(e){return console.error("Error fetching URL:",e),""}}n.d(t,{e:()=>o})},901:(e,t,n)=>{n.d(t,{s:()=>i});const o=['[data-section-theme="white"]','[data-section-theme="white-bold"]','[data-section-theme="light"]','[data-section-theme="light-bold"]','[data-section-theme="bright"]','[data-section-theme="bright-inverse"]','[data-section-theme="dark"]','[data-section-theme="dark-bold"]','[data-section-theme="black"]','[data-section-theme="black-bold"]'];async function i(){try{const e=await fetch("/site.css"),t=await e.text(),n=new CSSStyleSheet;n.replaceSync(t);const i=new Set;for(const e of n.cssRules)e.selectorText&&o.forEach((t=>{e.selectorText.includes(t)&&i.add(t)}));const r=o.find((e=>!i.has(e)));let s=0,a="";for(const e of n.cssRules)if(e.selectorText&&e.selectorText.startsWith(":root")&&(s++,2===s)){for(let t=0;t<e.style.length;t++){const n=e.style[t];a+=`${n}: ${e.style.getPropertyValue(n)}; `}break}if(s<2&&console.log("There is no second :root rule in the stylesheet."),r){const e=new CSSStyleSheet;e.insertRule(`:root, ${r} { ${a} }`,0);let t="";for(const n of e.cssRules)t+=n.cssText+"\n";const n=document.createElement("style");n.textContent=t;const o=document.querySelector('link[href$="site.css"]');o?o.parentNode.insertBefore(n,o):console.error("Could not find the existing stylesheet link element.")}}catch(e){console.error("Error processing stylesheet:",e)}}},212:(e,t,n)=>{n.r(t),n.d(t,{collectionData:()=>o.x,getHTML:()=>i.e,handleAddingMissingColorTheme:()=>p.s,initializeCodeBlocks:()=>l.g,initializeEmbedBlocks:()=>d.k,initializeShapeBlocks:()=>f.k,initializeThirdPartyPlugins:()=>u.Y,reloadSiteBundle:()=>a.b,reloadSquarespaceLifecycle:()=>c.D});var o=n(294),i=n(521),r=n(52),s={};for(const e in r)["default","collectionData","getHTML"].indexOf(e)<0&&(s[e]=()=>r[e]);n.d(t,s);var a=n(424),c=n(555),l=n(815),d=n(369),u=n(739),p=n(901),f=n(937)},815:(e,t,n)=>{async function o(e){const t=e.querySelectorAll(".sqs-block-code");for(const e of t){const t=e.querySelectorAll("script");for(const e of t)e.src?await r(e):i(e)}}function i(e){try{const t=document.createElement("script");t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}catch(e){console.error("Error executing inline script:",e)}}function r(e){return new Promise(((t,n)=>{const o=document.createElement("script");o.src=e.src,o.onload=t,o.onerror=n;for(const t of e.attributes)"src"!==t.name&&o.setAttribute(t.name,t.value);e.parentNode.replaceChild(o,e)}))}n.d(t,{g:()=>o})},369:(e,t,n)=>{async function o(e){const t=e.querySelectorAll(".sqs-block-embed");for(const e of t)await i(e)}async function i(e){const t=e.getAttribute("data-block-json");if(t)try{const n=JSON.parse(t).html;if(!n)return void console.error("No HTML content found in the JSON data");const o=document.createElement("div");o.innerHTML=n,e.innerHTML="",e.appendChild(o);const i=o.querySelectorAll("script");for(const e of i)e.src?await s(e):r(e)}catch(e){console.error("Error processing the embed block:",e)}else console.error("No data-block-json attribute found")}function r(e){try{const t=document.createElement("script");t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}catch(e){console.error("Error executing inline script:",e)}}function s(e){return new Promise(((t,n)=>{const o=document.createElement("script");o.src=e.src,o.onload=t,o.onerror=n;for(const t of e.attributes)"src"!==t.name&&o.setAttribute(t.name,t.value);e.parentNode.replaceChild(o,e)}))}n.d(t,{k:()=>o})},937:(e,t,n)=>{async function o(e){function t(e,t){const n=e.clientWidth,o=e.clientHeight;e.offsetWidth/e.offsetHeight>1?(t.style.height="100%",t.style.width=`${o}px`):(t.style.width="100%",t.style.height=`${n}px`)}document.querySelector("style#wm-shape-block-styles")||e.querySelector(".website-component-block")&&(function(){const e=document.createElement("style");e.id="wm-shape-block-styles",e.type="text/css",e.appendChild(document.createTextNode('\n    .sqs-block[data-definition-name="website.components.shape"] svg.sqs-shape {\n      fill: var(--shape-block-background-color);\n      stroke: var(--shape-block-stroke-color);\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape-rectangle {\n      background: var(--shape-block-background-color);\n      border-color: var(--shape-block-stroke-color);\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-content,\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-alignment-wrapper {\n      height: 100%;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-block-alignment-wrapper {\n      display: flex;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape {\n      display: block;\n      position: absolute;\n      overflow: visible;\n    }\n    .sqs-block[data-definition-name="website.components.shape"] .sqs-shape-block-container {\n      position: relative;\n      color: var(--shape-block-dropshadow-color);\n    }')),document.head.appendChild(e)}(),e.querySelectorAll(".sqs-block-website-component .sqs-shape-block-container[data-stretched-to-fill]").forEach((e=>{const t=e.firstElementChild;t&&(t.style.height="100%",t.style.width="100%",t instanceof SVGElement&&t.setAttribute("preserveAspectRatio","none"))})),e.querySelectorAll(".sqs-block-website-component .sqs-shape-block-container:not([data-stretched-to-fill])").forEach((e=>{const n=e.firstElementChild;n&&(t(e,n),new ResizeObserver((()=>{t(e,n)})).observe(e))})),e.querySelectorAll(".sqs-block-website-component .sqs-shape-block-container[data-drop-shadow]").forEach((e=>{const t=e.closest(".fe-block");if(!t)return;const n=e.getAttribute("data-drop-shadow"),o=JSON.parse(n);if(!o)return;const i=(o.angle-90)*(Math.PI/180),r=o.distance.value,s=o.distance.unit,a=Math.cos(i)*r,c=Math.sin(i)*r,l=o.blur.value,d=o.blur.unit,u=function(e){switch(e.type){case"SITE_PALETTE_COLOR":return`hsla(var(--${e.sitePaletteColor.colorName}-hsl), ${e.sitePaletteColor.alphaModifier})`;case"CUSTOM_COLOR":const{hue:t,saturation:n,lightness:o,alpha:i}=e.customColor.hslaValue;return`hsla(${t}, ${100*n}%, ${100*o}%, ${i})`;default:return"hsla(var(--shape-block-dropshadow-color-hsl), 1)"}}(o.color);t.style.filter=`drop-shadow(${a}${s} ${c}${s} ${l}${d} ${u})`})),e.querySelectorAll(".sqs-block-website-component .sqs-shape-block-container[data-blend-mode]").forEach((e=>{const t=e.closest(".fe-block");t&&(t.style.mixBlendMode=e.getAttribute("data-blend-mode"))})))}n.d(t,{k:()=>o})},739:(e,t,n)=>{async function o(e){e.querySelector('a[href*="#lightbox"]')&&"function"==typeof window.pluginLightbox&&window.pluginLightbox()}n.d(t,{Y:()=>o})},424:(e,t,n)=>{async function o(){return new Promise(((e,t)=>{const n=document.querySelector('script[src*="https://static1.squarespace.com/static/vta"]');if(!n)return void t(new Error("Site bundle script not found"));const o=n.parentNode,i=n.nextSibling;o.removeChild(n);const r=document.createElement("script");r.src=n.src,r.async=!0,r.onload=e,r.onerror=t,i?o.insertBefore(r,i):o.appendChild(r)}))}n.d(t,{b:()=>o})},555:(e,t,n)=>{n.d(t,{D:()=>c});var o=n(424),i=n(937),r=n(154),s=n(504),a=n(774);async function c(e=document){const t=Array.isArray(e)?e:[e],n={animationType:window.Static?.SQUARESPACE_CONTEXT?.tweakJSON["tweak-global-animations-animation-type"],animationsEnabled:window.Static?.SQUARESPACE_CONTEXT?.tweakJSON["tweak-global-animations-enabled"]};if("flex"===n.animationType&&"true"===n.animationsEnabled&&(window.Static.SQUARESPACE_CONTEXT.tweakJSON["tweak-global-animations-enabled"]="false"),t.forEach((e=>{(0,s.W)(e)})),void 0===window.Squarespace||void 0===window.Y)return void console.warn("Squarespace or Y is not available on the window object. Aborting reloadSquarespaceLifecycle.");const c=document.querySelectorAll("[data-controller]"),l=new Map;c.forEach((e=>{t.some((t=>t.contains(e)))||(l.set(e,e.getAttribute("data-controller")),e.removeAttribute("data-controller"))}));const d=window.websiteComponents?.loader;await(0,o.b)(),t.forEach((e=>{!async function(e){const t=e.querySelectorAll(".page-section:has(.section-border .sqs-video-background-native)"),n=(e.querySelectorAll('.page-section:has(.section-border [data-config-url*="vimeo.com"])'),e.querySelectorAll('.page-section:has(.section-border [data-config-url*="youtube.com"])'),[...t,...e.querySelectorAll(".sqs-block-video:has(.native-video-player)")]);e.querySelectorAll('.sqs-block-video:has([data-html*="vimeo.com"])'),e.querySelectorAll('.sqs-block-video:has([data-html*="youtube.com"])'),n.length&&n.forEach((e=>{e.$wmPlay=()=>{const t=e.querySelector("video");t&&(t.play(),e.$wmVideoIsPlaying=!0)},e.$wmPause=()=>{const t=e.querySelector("video");t&&(t.pause(),e.$wmVideoIsPlaying=!1)}}))}(e),(0,i.k)(e),d&&e.querySelector('[data-definition-name="website.components.map"]')&&(d.importMap["website.components.map.handlers"]="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.map/79e65e57-c3df-4bf0-8a99-2edac51db58c_19/website.components.map.handlers.js",d.importMap["website.components.map.visitor"]="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.map/79e65e57-c3df-4bf0-8a99-2edac51db58c_19/website.components.map.visitor.js"),d&&e.querySelector('[data-definition-name="website.components.shape"]')&&(d.importMap["website.components.shape.handlers"]="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.shape/d75e68bf-0410-4d8d-b4a2-ccfb6c53ba99_339/website.components.shape.handlers.js",d.importMap["website.components.shape.visitor"]="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.shape/d75e68bf-0410-4d8d-b4a2-ccfb6c53ba99_339/website.components.shape.visitor.js"),d&&e.querySelector('[data-definition-name="website.components.product"]')&&(d.importMap["website.components.product.handlers"]="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.product/857bf5a1-4819-4423-88d0-6060061a7092_44/website.components.product.handlers.js",d.importMap["website.components.product.visitor"]="https://definitions.sqspcdn.com/website-component-definition/static-assets/website.components.product/857bf5a1-4819-4423-88d0-6060061a7092_44/website.components.product.visitor.js"),Squarespace.initializeNativeVideo(Y,Y.one(e))})),(0,r.K)(),(0,a.U)();const u={addToCartButtons:document.querySelectorAll(".sqs-add-to-cart-button"),productComponents:document.querySelectorAll('[data-definition-name="website.components.product"]'),afterpayComponents:document.querySelectorAll('[data-afterpay="true"]'),context:window.Static?.SQUARESPACE_CONTEXT,nativeProductReviewsEnabled:window.Static?.SQUARESPACE_CONTEXT?.websiteSettings?.storeSettings?.merchandisingSettings?.displayNativeProductReviewsEnabled};t.forEach((e=>{!function(e){e.addToCartButtons.forEach((e=>{const t=e.cloneNode(!0);e.parentNode.replaceChild(t,e)})),e.productComponents.forEach((e=>{e.removeAttribute("data-definition-name")})),e.afterpayComponents.forEach((e=>e.removeAttribute("data-afterpay"))),e.context?.websiteSettings?.storeSettings?.merchandisingSettings&&(e.context.websiteSettings.storeSettings.merchandisingSettings.displayNativeProductReviewsEnabled=!1)}(u),function(e){if(Y&&Y.Squarespace){const t=Y.one(e);Squarespace.initializeWebsiteComponent(Y,t),Squarespace.initializeLayoutBlocks(Y,t),Squarespace.initializeCommerce(Y)}}(e),function(e){e.afterpayComponents.forEach((e=>e.setAttribute("data-afterpay","true"))),e.productComponents.forEach((e=>{e.setAttribute("data-definition-name","website.components.product")})),e.context?.websiteSettings?.storeSettings?.merchandisingSettings&&(e.context.websiteSettings.storeSettings.merchandisingSettings.displayNativeProductReviewsEnabled=e.nativeProductReviewsEnabled)}(u)})),l.forEach(((e,t)=>{t.setAttribute("data-controller",e)})),"flex"===n.animationType&&"true"===n.animationsEnabled&&window.setTimeout((()=>{window.Static.SQUARESPACE_CONTEXT.tweakJSON["tweak-global-animations-enabled"]=n.animationsEnabled}),1e3)}},814:(e,t,n)=>{n.r(t),n.d(t,{__esModule:()=>o.B,debounce:()=>o.s,deepMerge:()=>a,emitEvent:()=>r,parseAttr:()=>s,throttle:()=>i});var o=n(179);function i(e,t){let n,o;return(...i)=>{const r=this;o?(clearTimeout(n),n=setTimeout((()=>{Date.now()-o>=t&&(e.apply(r,i),o=Date.now())}),t-(Date.now()-o))):(e.apply(r,i),o=Date.now())}}function r(e,t={},n=document){if(!e)return;let o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:t});return n.dispatchEvent(o)}function s(e){if("true"===e)return!0;if("false"===e)return!1;const t=parseFloat(e);return isNaN(t)||t.toString()!==e?e:t}function a(...e){function t(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function n(e,o){for(let[i,r]of Object.entries(o)){let o=t(r);"object"===o||"array"===o?(void 0===e[i]&&(e[i]="object"===o?{}:[]),n(e[i],r)):e[i]=r}}if(0===e.length)return{};let o={};return e.forEach((e=>{n(o,e)})),o}},125:(e,t,n)=>{n.r(t),n.d(t,{initializeAllPlugins:()=>o.U,initializeCustomScripts:()=>a.K,initializeTabsPlugin:()=>i,initializeVerticalTimeline:()=>r,setImageFocalPoints:()=>s.W});var o=n(774);function i(){window.wmTabs&&"function"==typeof window.wmTabs.init&&window.wmTabs.init()}function r(){window.wmInitVerticalTimeline&&"function"==typeof window.wmInitVerticalTimeline&&window.wmInitVerticalTimeline()}var s=n(504),a=n(154)},774:(e,t,n)=>{function o(){window.wmTabs&&"function"==typeof window.wmTabs.init&&window.wmTabs.init(),window.wmInitVerticalTimeline&&"function"==typeof window.wmInitVerticalTimeline&&window.wmInitVerticalTimeline(),window.wmListSectionSync&&"function"==typeof window.wmListSectionSync.init&&window.wmListSectionSync.init(),window.wmSectionSlider&&"function"==typeof window.wmSectionSlider.init&&window.wmSectionSlider.init(),window.wmSectionLoader&&"function"==typeof window.wmSectionLoader.init&&window.wmSectionLoader.init(),window.sk_applyPresets&&"function"==typeof window.sk_applyPresets&&window.sk_applyPresets()}n.d(t,{U:()=>o})},154:(e,t,n)=>{function o(){document.querySelectorAll("script[data-wm-reinit]").forEach((e=>{const t=document.createElement("script");Array.from(e.attributes).forEach((e=>{t.setAttribute(e.name,e.value)})),e.src?t.src=e.src:t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}))}n.d(t,{K:()=>o})},504:(e,t,n)=>{function o(e=document){e.querySelectorAll("img[data-image-focal-point]").forEach((e=>{const t=e.getAttribute("data-image-focal-point");if(t){const[n,o]=t.split(",").map(Number),i=`${100*n}% ${100*o}%`;e.style.setProperty("--wm-focal-point",i)}}))}n.d(t,{W:()=>o})}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}return n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(156)})()));
