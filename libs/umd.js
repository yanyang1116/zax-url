!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.zaxUrl=e()}(this,function(){"use strict";var t={strToObj:function(t){return t.split("&").reduce(function(t,e){var n=e.split("=");return n[0]&&(t[n[0]]=n[1]),t},{})},objToStr:function(t){return Object.keys(t).reduce(function(e,n){return e.push(n+"="+t[n]),e},[]).join("&")},port:function(t){switch(t){case"http:":return 80;case"https:":return 443;default:return parseInt(location.port)}},testFoo:function(t,e){return t.split("")[e]}};return{parse:function(e){if("undefined"!=typeof document){var n=document.createElement("a");return n.href=e,{hash:n.hash,host:n.host||location.host,hostname:n.hostname||location.hostname,href:n.href,origin:n.origin,pathname:"/"!=n.pathname.charAt(0)?"/"+n.pathname:n.pathname,port:"0"===n.port||""===n.port?t.port(n.protocol):n.port,protocol:n.protocol&&":"!=n.protocol?n.protocol:location.protocol,search:n.search||""}}var o=e.slice(e.lastIndexOf("#")>-1?e.lastIndexOf("#"):e.length)||"",r=e.replace(o,"");return{href:e,hash:o,search:r.slice(r.lastIndexOf("?")>-1?r.lastIndexOf("?"):r.length)||""}},get:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[0],o=t[1];if(1==arguments.length)if(o=n,"undefined"!=typeof document)n=location.href;else if("undefined"!=typeof wx){var r=getCurrentPages(),a=r[r.length-1].route;n=a.route+a.options}return n?this.search(n)[o]||"":(console.log("url param lost"),"")},set:function(e,n,o){if(!n)return console.log("key can not be null"),e;var r=this.search(e);2==arguments.length&&"[object Object]"===Object.prototype.toString.call(n)?Object.assign(r,n):""===o||null===o?delete r[n]:r[n]=o;var a=t.objToStr(r),s=this.parse(e).hash,c=e.replace(s,""),i=c.indexOf("?");return i=i>-1?i:c.length,e.slice(0,i)+(a?"?"+a:"")+s},del:function(t,e){return this.set(t,e,null)},search:function(e){var n=this.parse(e).search.replace("?","");return n?t.strToObj(n):""},hash:function(t){var e=this.parse(t).hash.replace("#","");return e||(console.log("no hash char"),"")},pathKey:function(t,e){return void 0===e&&(e=0),t.split("/").pop().split(/\?|\#/)[0].slice(e)}}});
