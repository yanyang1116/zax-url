'use strict';

/**
 * url module with server & client & miniprogram side
 */

export default {
    parse(url) {
        if (typeof document != 'undefined') {
            // client side
            let a = document.createElement('a');
            a.href = url;
            return {
                hash: a.hash,
                host: a.host || location.host,
                hostname: a.hostname || location.hostname,
                href: a.href,
                origin: a.origin,
                pathname: a.pathname.charAt(0) != '/' ? '/' + a.pathname : a.pathname,
                port: ('0' === a.port || '' === a.port) ? this._port(a.protocol) : a.port,
                protocol: !a.protocol || ':' == a.protocol ? location.protocol : a.protocol,
                search: a.search || ''
            };
        } else {
            //mini program & server side
            let hash = url.slice(url.lastIndexOf('#') > -1 ? url.lastIndexOf('#') : url.length) || '';
            let tmp = url.replace(hash, '');
            let search = tmp.slice(tmp.lastIndexOf('?') > -1 ? tmp.lastIndexOf('?') : tmp.length) || '';
            return {
                href: url,
                hash,
                search
            }
        }
    },
    get(url, key) {
        if (arguments.length == 1) {
            key = url;
            if (typeof document != 'undefined') {
                //client side
                url = location.href;
            } else {
                if (wx) {
                    //miniprogram
                    let pages = getCurrentPages()
                    let len = pages.length
                    let cur = pages[len - 1]
                    let {
                        route,
                        options
                    } = cur.route
                    url = route + options
                }
            }
        }
        let searchObj = this.search(url);
        return searchObj[key] || ''
    },
    set(url, key, value) {
        if (!key) {
            console.log('key can not be null');
            return url;
        }

        let searchObj = this.search(url);

        if (arguments.length == 2 && Object.prototype.toString.call(key) === '[object Object]') {
            Object.assign(searchObj, key)
        } else if (value === '' || value === null) {
            delete searchObj[key];
        } else {
            searchObj[key] = value
        }

        let res = this._objToStr(searchObj)

        let hash = this.parse(url).hash;
        let tmp = url.replace(hash, '');
        let askIdx = tmp.indexOf('?');

        askIdx = askIdx > -1 ? askIdx : tmp.length

        let left = url.slice(0, askIdx);
        let mid = res ? '?' + res : '';
        let right = hash;

        return left + mid + right;
    },
    del(url, key) {
        return this.set(url, key, null)
    },
    search(url) {
        let search = this.parse(url).search.replace('?', '');
        if (!search) {
            // console.log('no search char');
            return '';
        }
        return this._strToObj(search)
    },
    hash(url) {
        let hash = this.parse(url).hash.replace('#', '');
        if (!hash) {
            console.log('no hash char');
            return "";
        }
        return hash
    },
    pathKey: (url, pos = 0) => {
        let last = url.split('/').pop()
        return last.split(/\?|\#/)[0].slice(pos)
    },
    _strToObj(query) {
        return query.split('&').reduce((sum, item) => {
            let arr = item.split('=')
            arr[0] && (sum[arr[0]] = arr[1])
            return sum
        }, {})
    },
    _objToStr(options) {
        return Object.keys(options).reduce((sum, item) => {
            sum.push(`${item}=${options[item]}`)
            return sum
        }, []).join('&')
    },
    _port(protocol) {
        switch (protocol) {
            case 'http:':
                return 80;
            case 'https:':
                return 443;
            default:
                return parseInt(location.port);
        }
    },
    testFoo(url, num) {
        return url.split('')[num]
    },
}

