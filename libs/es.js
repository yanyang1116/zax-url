var zaxUtil={strToObj:function(t){return t.split("&").reduce(function(t,e){var r=e.split("=");return r[0]&&(t[r[0]]=r[1]),t},{})},objToStr:function(t){return Object.keys(t).reduce(function(e,r){return e.push(r+"="+t[r]),e},[]).join("&")},port:function(t){switch(t){case"http:":return 80;case"https:":return 443;default:return parseInt(location.port)}},testFoo:function(t,e){return t.split("")[e]}};function get(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=t[0],o=t[1];if(1==arguments.length)if(o=r,"undefined"!=typeof document)r=location.href;else if("undefined"!=typeof wx){var n=getCurrentPages(),a=n[n.length-1].route;r=a.route+a.options}return r?this.search(r)[o]||"":(console.log("url param lost"),"")}function set(t,e,r){if(void 0===r&&(r=""),!e)return console.log("key can not be null"),t;var o=this.search(t);2==arguments.length&&"[object Object]"===Object.prototype.toString.call(e)?Object.assign(o,e):""===r||null===r?delete o[e]:o[e]=r;var n=zaxUtil.objToStr(o),a=this.parse(t).hash,s=t.replace(a,""),l=s.indexOf("?");return l=l>-1?l:s.length,t.slice(0,l)+(n?"?"+n:"")+a}var zaxUrl={parse:function(t){if("undefined"!=typeof document){var e=document.createElement("a");return e.href=t,{hash:e.hash,host:e.host||location.host,hostname:e.hostname||location.hostname,href:e.href,origin:e.origin,pathname:"/"!=e.pathname.charAt(0)?"/"+e.pathname:e.pathname,port:"0"===e.port||""===e.port?zaxUtil.port(e.protocol):e.port,protocol:e.protocol&&":"!=e.protocol?e.protocol:location.protocol,search:e.search||""}}var r=t.slice(t.lastIndexOf("#")>-1?t.lastIndexOf("#"):t.length)||"",o=t.replace(r,"");return{href:t,hash:r,search:o.slice(o.lastIndexOf("?")>-1?o.lastIndexOf("?"):o.length)||""}},get:get,set:set,del:function(t,e){return this.set(t,e,null)},search:function(t){var e=this.parse(t).search.replace("?","");return e?zaxUtil.strToObj(e):""},hash:function(t){var e=this.parse(t).hash.replace("#","");return e||(console.log("no hash char"),"")},pathKey:function(t,e){return void 0===e&&(e=0),t.split("/").pop().split(/\?|\#/)[0].slice(e)}};export{zaxUrl};
