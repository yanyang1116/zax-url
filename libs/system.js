System.register("zaxUrl",[],function(t,e){"use strict";return{execute:function(){t("default",{parse:function(t){if("undefined"!=typeof document){var e=document.createElement("a");return e.href=t,{hash:e.hash,host:e.host||location.host,hostname:e.hostname||location.hostname,href:e.href,origin:e.origin,pathname:"/"!=e.pathname.charAt(0)?"/"+e.pathname:e.pathname,port:"0"===e.port||""===e.port?this._port(e.protocol):e.port,protocol:e.protocol&&":"!=e.protocol?e.protocol:location.protocol,search:e.search||""}}var r=t.slice(t.lastIndexOf("#")>-1?t.lastIndexOf("#"):t.length)||"",n=t.replace(r,"");return{href:t,hash:r,search:n.slice(n.lastIndexOf("?")>-1?n.lastIndexOf("?"):n.length)||""}},get:function(t,e){if(1==arguments.length)if(e=t,"undefined"!=typeof document)t=location.href;else if(wx){var r=getCurrentPages(),n=r[r.length-1].route;t=n.route+n.options}return this.search(t)[e]||""},set:function(t,e,r){if(!e)return console.log("key can not be null"),t;var n=this.search(t);2==arguments.length&&"[object Object]"===Object.prototype.toString.call(e)?Object.assign(n,e):""===r||null===r?delete n[e]:n[e]=r;var o=this._objToStr(n),s=this.parse(t).hash,a=t.replace(s,""),c=a.indexOf("?");return c=c>-1?c:a.length,t.slice(0,c)+(o?"?"+o:"")+s},del:function(t,e){return this.set(t,e,null)},search:function(t){var e=this.parse(t).search.replace("?","");return e?this._strToObj(e):""},hash:function(t){var e=this.parse(t).hash.replace("#","");return e||(console.log("no hash char"),"")},pathKey:function(t,e){return void 0===e&&(e=0),t.split("/").pop().split(/\?|\#/)[0].slice(e)},_strToObj:function(t){return t.split("&").reduce(function(t,e){var r=e.split("=");return r[0]&&(t[r[0]]=r[1]),t},{})},_objToStr:function(t){return Object.keys(t).reduce(function(e,r){return e.push(r+"="+t[r]),e},[]).join("&")},_port:function(t){switch(t){case"http:":return 80;case"https:":return 443;default:return parseInt(location.port)}},testFoo:function(t,e){return t.split("")[e]}})}}});
