var zaxUrl={parse:function(t){try{var e=document.createElement("a");return e.href=t,{hash:e.hash,host:e.host||location.host,hostname:e.hostname||location.hostname,href:e.href,origin:e.origin,pathname:"/"!=e.pathname.charAt(0)?"/"+e.pathname:e.pathname,port:"0"===e.port||""===e.port?this._port(e.protocol):e.port,protocol:e.protocol&&":"!=e.protocol?e.protocol:location.protocol,search:e.search||""}}catch(e){var r=t.slice(t.lastIndexOf("#")>-1?t.lastIndexOf("#"):t.length)||"",o=t.replace(r,"");return{href:t,hash:r,search:o.slice(o.lastIndexOf("?")>-1?o.lastIndexOf("?"):o.length)||""}}},get:function(t,e){if(1==arguments.length)if(e=t,location)t=location.href;else{var r=getCurrentPages(),o=r[r.length-1].route;t=o.route+o.options}return this.search(t)[e]||""},set:function(t,e,r){if(!e)return console.log("key can not be null"),t;var o=this.search(t);2==arguments.length&&"[object Object]"===Object.prototype.toString.call(e)?Object.assign(o,e):""===r||null===r?delete o[e]:o[e]=r;var n=this._objToStr(o),a=this.parse(t).hash,c=t.replace(a,""),s=c.indexOf("?");return s=s>-1?s:c.length,t.slice(0,s)+(n?"?"+n:"")+a},del:function(t,e){return this.set(t,e,null)},search:function(t){var e=this.parse(t).search.replace("?","");return e?this._strToObj(e):(console.log("no search char"),{})},hash:function(t){var e=this.parse(t).hash.replace("#","");return e||(console.log("no hash char"),"")},_strToObj:function(t){return t.split("&").reduce(function(t,e){var r=e.split("=");return r[0]&&(t[r[0]]=r[1]),t},{})},_objToStr:function(t){return Object.keys(t).reduce(function(e,r){return e.push("".concat(r,"=").concat(t[r])),e},[]).join("&")},_port:function(t){switch(t){case"http:":return 80;case"https:":return 443;default:return location.port}}};export default zaxUrl;
