!function(e){function t(t){for(var s,n,a=t[0],i=t[1],o=0,c=[];o<a.length;o++)n=a[o],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&c.push(r[n][0]),r[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);for(l&&l(t);c.length;)c.shift()()}var s={},r={index:0};function n(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.e=function(e){var t=[],s=r[e];if(0!==s)if(s)t.push(s[2]);else{var a=new Promise((function(t,n){s=r[e]=[t,n]}));t.push(s[2]=a);var i,o=document.createElement("script");o.charset="utf-8",o.timeout=120,n.nc&&o.setAttribute("nonce",n.nc),o.src=function(e){return n.p+"bundles/"+({"add-scrolling":"add-scrolling","change-placeables":"change-placeables","draggable-items":"draggable-items","item-sort-btns":"item-sort-btns","modify-rolling":"modify-rolling","modify-templates":"modify-templates","prepared-spell-tracker":"prepared-spell-tracker"}[e]||e)+"."+{0:"67b6","add-scrolling":"1c30","change-placeables":"9f20","draggable-items":"a966","item-sort-btns":"1907","modify-rolling":"4bca","modify-templates":"26bb","prepared-spell-tracker":"dee3"}[e]+".js"}(e);var l=new Error;i=function(t){o.onerror=o.onload=null,clearTimeout(c);var s=r[e];if(0!==s){if(s){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,s[1](l)}r[e]=void 0}};var c=setTimeout((function(){i({type:"timeout",target:o})}),12e4);o.onerror=o.onload=i,document.head.appendChild(o)}return Promise.all(t)},n.m=e,n.c=s,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="modules/mess/scripts/",n.oe=function(e){throw console.error(e),e};var a=window.webpackJsonp=window.webpackJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var o=0;o<a.length;o++)t(a[o]);var l=i;n(n.s="./src/scripts/index.js")}({"./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */function(e,t,s){Hooks.on("ready",(async function(){if(game.settings.get("mess","actor-item-sort")&&(await s.e(/*! import() | item-sort-btns */"item-sort-btns").then(s.bind(null,/*! ./actor-item-sort-btn.js */"./src/scripts/actor-item-sort-btn.js"))).default(),game.settings.get("mess","better-draggable")&&(await s.e(/*! import() | draggable-items */"draggable-items").then(s.bind(null,/*! ./draggable-items.js */"./src/scripts/draggable-items.js"))).default(),game.settings.get("mess","prepared-spell-tracker")&&(await s.e(/*! import() | prepared-spell-tracker */"prepared-spell-tracker").then(s.bind(null,/*! ./prepared-spell-tracker.js */"./src/scripts/prepared-spell-tracker.js"))).default(),game.settings.get("mess","add-scrolling")&&(await s.e(/*! import() | add-scrolling */"add-scrolling").then(s.bind(null,/*! ./add-scrolling.js */"./src/scripts/add-scrolling.js"))).default(),CONFIG.debug.mess){(await fromUuid("Actor.xV3LUAg05Pz5MFTS")).sheet.render(!0)}})),Hooks.on("init",(async function(){CONFIG.debug.mess=!1,(await s.e(/*! import() */0).then(s.bind(null,/*! ./settings.js */"./src/scripts/settings.js"))).MessSettings.init(),CONFIG.debug.mess&&(console.log(game.settings.get("mess","modify-templates")),console.log(game.settings.get("mess","modify-rolling")),console.log(game.settings.get("mess","change-placeables"))),game.settings.get("mess","modify-templates")&&(await s.e(/*! import() | modify-templates */"modify-templates").then(s.bind(null,/*! ./modify-templates.js */"./src/scripts/modify-templates.js"))).default(),game.settings.get("mess","modify-rolling")&&(await s.e(/*! import() | modify-rolling */"modify-rolling").then(s.bind(null,/*! ./modify-rolling.js */"./src/scripts/modify-rolling.js"))).default(),game.settings.get("mess","change-placeables")&&(await s.e(/*! import() | change-placeables */"change-placeables").then(s.bind(null,/*! ./change-placeables.js */"./src/scripts/change-placeables.js"))).default()}))}});
//# sourceMappingURL=index.js.map