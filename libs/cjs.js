"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var zaxUtil={strToObj:function(e){return e.split("&").reduce(function(e,t){var r=t.split("=");return r[0]&&(e[r[0]]=r[1]),e},{})},objToStr:function(e){return Object.keys(e).reduce(function(t,r){return t.push(r+"="+e[r]),t},[]).join("&")},port:function(e){switch(e){case"http:":return"80";case"https:":return"443";default:return location.port}}};function get(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=e[0],o=e[1];if(1==arguments.length)if(o=r,"undefined"!=typeof document)r=location.href;else if("undefined"!=typeof wx){var n=getCurrentPages(),a=n[n.length-1].route;r=a.route+a.options}return r?zaxUrl.search(r)[o]||"":(console.log("url param lost"),"")}function set(e,t,r){if(void 0===r&&(r=""),!t)return console.log("key can not be null"),e;var o=zaxUrl.search(e);2==arguments.length&&"[object Object]"===Object.prototype.toString.call(t)?Object.assign(o,t):""===r||null==r?delete o[t]:o[t]=r;var n=zaxUtil.objToStr(o),a=zaxUrl.parse(e).hash,l=e.replace(a,""),s=l.indexOf("?");return s=s>-1?s:l.length,e.slice(0,s)+(n?"?"+n:"")+a}var zaxUrl={parse:function(e){if("undefined"!=typeof document){var t=document.createElement("a");return t.href=e,{hash:t.hash,host:t.host||location.host,hostname:t.hostname||location.hostname,href:t.href,origin:t.origin,pathname:"/"!=t.pathname.charAt(0)?"/"+t.pathname:t.pathname,port:"0"===t.port||""===t.port?zaxUtil.port(t.protocol):t.port,protocol:t.protocol&&":"!=t.protocol?t.protocol:location.protocol,search:t.search||""}}var r=e.slice(e.lastIndexOf("#")>-1?e.lastIndexOf("#"):e.length)||"",o=e.replace(r,""),n=o.slice(o.lastIndexOf("?")>-1?o.lastIndexOf("?"):o.length)||"";return{pathname:e.replace(n,"").replace(r,""),href:e,hash:r,search:n}},get:get,set:set,del:function(e,t){return this.set(e,t,"")},search:function(e){var t=this.parse(e).search.replace("?","");return t?zaxUtil.strToObj(t):{}},hash:function(e){var t=this.parse(e).hash.replace("#","");return t||(console.log("no hash char"),"")},pathKey:function(e,t){void 0===t&&(t=0);var r=this.parse(e).pathname;return r?(r.split("/").pop()||"").slice(t):""}};exports.zaxUrl=zaxUrl;
