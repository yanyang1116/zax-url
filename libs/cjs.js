"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var expModule={parse:function(e){if("undefined"!=typeof document){var t=document.createElement("a");return t.href=e,{hash:t.hash,host:t.host||location.host,hostname:t.hostname||location.hostname,href:t.href,origin:t.origin,pathname:"/"!=t.pathname.charAt(0)?"/"+t.pathname:t.pathname,port:"0"===t.port||""===t.port?this._port(t.protocol):t.port,protocol:t.protocol&&":"!=t.protocol?t.protocol:location.protocol,search:t.search||""}}var r=e.slice(e.lastIndexOf("#")>-1?e.lastIndexOf("#"):e.length)||"",o=e.replace(r,"");return{href:e,hash:r,search:o.slice(o.lastIndexOf("?")>-1?o.lastIndexOf("?"):o.length)||""}},get:function(e,t){if(1==arguments.length)if(t=e,"undefined"!=typeof document)e=location.href;else if(wx){var r=getCurrentPages(),o=r[r.length-1].route;e=o.route+o.options}return this.search(e)[t]||""},set:function(e,t,r){if(!t)return console.log("key can not be null"),e;var o=this.search(e);2==arguments.length&&"[object Object]"===Object.prototype.toString.call(t)?Object.assign(o,t):""===r||null===r?delete o[t]:o[t]=r;var n=this._objToStr(o),s=this.parse(e).hash,a=e.replace(s,""),c=a.indexOf("?");return c=c>-1?c:a.length,e.slice(0,c)+(n?"?"+n:"")+s},del:function(e,t){return this.set(e,t,null)},search:function(e){var t=this.parse(e).search.replace("?","");return t?this._strToObj(t):""},hash:function(e){var t=this.parse(e).hash.replace("#","");return t||(console.log("no hash char"),"")},pathKey:function(e,t){void 0===t&&(t=0);var r=e.split("/").pop(),o=r.indexOf("?");(r=r.slice(0,o)).indexOf("#");return r=(r=r.slice(0,o)).slice(t)},_strToObj:function(e){return e.split("&").reduce(function(e,t){var r=t.split("=");return r[0]&&(e[r[0]]=r[1]),e},{})},_objToStr:function(e){return Object.keys(e).reduce(function(t,r){return t.push(r+"="+e[r]),t},[]).join("&")},_port:function(e){switch(e){case"http:":return 80;case"https:":return 443;default:return parseInt(location.port)}},testFoo:function(e,t){return e.split("")[t]}};exports.default=expModule;
