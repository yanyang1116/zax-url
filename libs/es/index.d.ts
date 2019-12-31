/**
 * Url modules.
 * @module zaxUrl
 * @author jsonchou
 * @description support server & client & miniprogram side
 * @see https://github.com/jsonchou/zax-url
 */
declare type IKV = {
    [key: string]: string | number;
};
declare type UrlObject = {
    href: string;
    hash: string;
    search: string;
    host?: string;
    hostname?: string;
    origin?: string;
    pathname?: string;
    port?: string;
    protocol?: string;
};
/**
 * get value from url search part
 *
 * @example
 * ```js
 * get("pages/index?id=2", 'id')
 * => 2
 * ```
 *
 * @param url {String} url
 * @param key {String} key
 * @returns {String} string of result
 */
export declare const get: (url: string, key: string) => string;
/**
 * set & get new url
 *
 * @example
 * ```js
 * set("pages/index?id=2", 'foo','bar')
 * => pages/index?id=2&foo=bar
 * ```
 *
 * @param url {String} url
 * @param key {String} key
 * @param value {String} value
 * @returns {String} new url
 */
export declare const set: (url: string, key: string, value?: string) => string;
/**
 * delete key & get new url
 *
 * @example
 * ```js
 * del("pages/index?id=2", 'id')
 * => pages/index
 * ```
 *
 * @param url {String} url
 * @param key {String} key
 * @returns {String} new url
 */
export declare const del: (url: string, key: string) => string;
/**
 * get key of value of url
 *
 * @example
 * ```js
 * parse("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
 * => {
    host: 'demo.com',
    hostname: 'demo.com',
    href: mixUrl,
    origin: 'https://demo.com',
    pathname: '/index',
    port: '443',
    protocol: 'https:',
    hash: '#/path/id=3?bizOrigin=bar',
    search: '?bizOrigin=foo&other=quz'
}
 * ```
 *
 * @param url {String} url
 * @returns {UrlObject} parse object
 */
export declare const parse: (url: string) => UrlObject;
/**
 * get url search part
 *
 * @example
 * ```js
 * search("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
 * => { bizOrigin: 'foo', other: 'quz' }
 * ```
 *
 * @param url {String} url
 * @returns {IKV} url search part
 */
export declare const search: (url: string) => IKV;
/**
 * get url hash part without # prefix
 *
 * @example
 * ```js
 * hash("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
 * => /path/id=3?bizOrigin=bar
 * ```
 *
 * @param url {String} url
 * @returns {String} url hash part
 */
export declare const hash: (url: string) => string;
/**
 * get last url part of key
 *
 * @example
 * ```js
 * pathKey("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
 * => index
 *
 *
 * pathKey("https://demo.com/p123?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar",1)
 * => 123
 *
 *
 * pathKey("https://demo.com/p-123?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar",2)
 * => 123
 *
 * ```
 *
 * @param url {String} url
 * @param pos {Number} pos
 * @returns {String} key path
 */
export declare const pathKey: (url: string, pos?: number) => string;
/**
 * get extname from path
 *
 * @example
 * ```js
 * extname("/test/something/file.txt")
 * => .txt
 *
 * extname("/test/something/file")
 * => '' // empty
 *
 * ```
 *
 * @param url {String} url
 * @returns {String} extname
 */
export declare const extname: (url: string) => string;
/**
 * get basename from path
 *
 * @example
 * ```js
 * basename("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
 * => index
 *
 * basename("https://demo.com/dairy.txt?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
 * => dairy.txt
 * ```
 *
 * @param url {String} url
 * @returns {String} key path
 */
export declare const basename: (url: string) => string;
/**
 * remove host and left pathname + search + hash
 *
 * @example
 * ```js
 * pathmain("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
 * => /index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar
 * ```
 *
 * @param url {String} url
 * @returns {String} key path
 */
export declare const pathmain: (url: string) => string;
declare const _default: {
    parse: (url: string) => UrlObject;
    get: (url: string, key: string) => string;
    set: (url: string, key: string, value?: string) => string;
    del: (url: string, key: string) => string;
    search: (url: string) => IKV;
    hash: (url: string) => string;
    pathKey: (url: string, pos?: number) => string;
    basename: (url: string) => string;
    extname: (url: string) => string;
    pathmain: (url: string) => string;
};
export default _default;
