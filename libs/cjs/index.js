/**
 * url module with server & client & miniprogram side
 */
'use strict';
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var zaxUtil = {
    strToObj: function (query) {
        return query.split('&').reduce(function (sum, item) {
            var arr = item.split('=');
            arr[0] && (sum[arr[0]] = arr[1]);
            return sum;
        }, {});
    },
    objToStr: function (params) {
        return Object.keys(params)
            .reduce(function (sum, item) {
            /* istanbul ignore next */
            if (item && params[item]) {
                /* istanbul ignore next */
                sum.push(item + "=" + params[item]);
            }
            return sum;
        }, [])
            .join('&');
    },
    port: function (protocol) {
        /* istanbul ignore next */
        switch (protocol) {
            case 'http:':
                return '80';
            case 'https:':
                return '443';
            default:
                /* istanbul ignore next */
                return location.port || '80';
        }
    }
};
function get() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _a = __read(args, 2), url = _a[0], key = _a[1];
    /* istanbul ignore next */
    if (arguments.length == 1) {
        key = url;
        if (typeof document != 'undefined') {
            //client side
            url = location.href;
        }
        else {
            if (typeof wx != 'undefined') {
                //miniprogram
                var pages = getCurrentPages();
                var len = pages.length;
                var cur = pages[len - 1];
                var _b = cur.route, route = _b.route, options = _b.options;
                url = route + options;
            }
        }
    }
    /* istanbul ignore next */
    if (!url) {
        console.log('url must be a string');
        return '';
    }
    var searchObj = exports.zaxUrl.search(url);
    return searchObj[key] || '';
}
/* istanbul ignore next */
function set(url, key, value) {
    if (value === void 0) { value = ''; }
    if (!key) {
        console.log('key must be a string');
        return url;
    }
    var searchObj = exports.zaxUrl.search(url);
    if (arguments.length == 2 && Object.prototype.toString.call(key) === '[object Object]') {
        Object.assign(searchObj, key);
    }
    else if (value === '' || value === null || value === undefined) {
        delete searchObj[key];
    }
    else {
        searchObj[key] = value;
    }
    var res = zaxUtil.objToStr(searchObj);
    var hash = exports.zaxUrl.parse(url).hash;
    var tmp = url.replace(hash, '');
    var askIdx = tmp.indexOf('?');
    askIdx = askIdx > -1 ? askIdx : tmp.length;
    var left = url.slice(0, askIdx);
    var mid = res ? '?' + res : '';
    var right = hash;
    return left + mid + right;
}
exports.zaxUrl = {
    parse: function (url) {
        if (!url) {
            console.log('url must be a string');
            return {
                href: '',
                hash: '',
                search: ''
            };
        }
        /* istanbul ignore next */
        if (typeof document != 'undefined') {
            // client side
            var a = document.createElement('a');
            a.href = url;
            return {
                hash: a.hash,
                host: a.host || location.host,
                hostname: a.hostname || location.hostname,
                href: a.href,
                origin: a.origin,
                pathname: a.pathname.charAt(0) != '/' ? '/' + a.pathname : a.pathname,
                port: '0' === a.port || '' === a.port ? zaxUtil.port(a.protocol) : a.port,
                protocol: !a.protocol || ':' == a.protocol ? location.protocol : a.protocol,
                search: a.search || ''
            };
        } /* istanbul ignore next */
        else {
            //mini program & server side
            var hash = url.slice(url.lastIndexOf('#') > -1 ? url.lastIndexOf('#') : url.length) || '';
            var tmp = url.replace(hash, '');
            var search = tmp.slice(tmp.lastIndexOf('?') > -1 ? tmp.lastIndexOf('?') : tmp.length) || '';
            return {
                pathname: url.replace(search, '').replace(hash, ''),
                href: url,
                hash: hash,
                search: search
            };
        }
    },
    get: get,
    set: set,
    del: function (url, key) {
        return this.set(url, key, '');
    },
    search: function (url) {
        var search = this.parse(url).search.replace('?', '');
        if (!search) {
            // console.log('no search char');
            return {};
        }
        return zaxUtil.strToObj(search);
    },
    hash: function (url) {
        var hash = this.parse(url).hash.replace('#', '');
        if (!hash) {
            console.log('no hash char');
            return '';
        }
        return hash;
    },
    pathKey: function (url, pos) {
        if (pos === void 0) { pos = 0; }
        /* istanbul ignore next */
        var pathname = this.parse(url).pathname || '';
        var last = pathname.split('/').pop() || '';
        return last.slice(pos);
    }
};
//# sourceMappingURL=index.js.map