var zaxUrl=function(){"use strict";var t={strToObj:function(t){return t.split("&").reduce(function(t,e){var r=e.split("=");return r[0]&&(t[r[0]]=r[1]),t},{})},objToStr:function(t){return Object.keys(t).reduce(function(e,r){return e.push(r+"="+t[r]),e},[]).join("&")},port:function(t){switch(t){case"http:":return 80;case"https:":return 443;default:return parseInt(location.port)}},testFoo:function(t,e){return t.split("")[e]}};return{parse:function(e){if("undefined"!=typeof document){var r=document.createElement("a");return r.href=e,{hash:r.hash,host:r.host||location.host,hostname:r.hostname||location.hostname,href:r.href,origin:r.origin,pathname:"/"!=r.pathname.charAt(0)?"/"+r.pathname:r.pathname,port:"0"===r.port||""===r.port?t.port(r.protocol):r.port,protocol:r.protocol&&":"!=r.protocol?r.protocol:location.protocol,search:r.search||""}}var n=e.slice(e.lastIndexOf("#")>-1?e.lastIndexOf("#"):e.length)||"",o=e.replace(n,"");return{href:e,hash:n,search:o.slice(o.lastIndexOf("?")>-1?o.lastIndexOf("?"):o.length)||""}},get:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[0],n=t[1];if(1==arguments.length)if(n=r,"undefined"!=typeof document)r=location.href;else if("undefined"!=typeof wx){var o=getCurrentPages(),a=o[o.length-1].route;r=a.route+a.options}return r?this.search(r)[n]||"":(console.log("url param lost"),"")},set:function(e,r,n){if(!r)return console.log("key can not be null"),e;var o=this.search(e);2==arguments.length&&"[object Object]"===Object.prototype.toString.call(r)?Object.assign(o,r):""===n||null===n?delete o[r]:o[r]=n;var a=t.objToStr(o),s=this.parse(e).hash,c=e.replace(s,""),l=c.indexOf("?");return l=l>-1?l:c.length,e.slice(0,l)+(a?"?"+a:"")+s},del:function(t,e){return this.set(t,e,null)},search:function(e){var r=this.parse(e).search.replace("?","");return r?t.strToObj(r):""},hash:function(t){var e=this.parse(t).hash.replace("#","");return e||(console.log("no hash char"),"")},pathKey:function(t,e){return void 0===e&&(e=0),t.split("/").pop().split(/\?|\#/)[0].slice(e)}}}();
