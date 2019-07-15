export interface ZaxUtil {
    /**
    * string to object
    * @param url
    */
	strToObj(url: string): object
    /**
     * object to string
     * @param url
     */
	objToStr(url: string): string
    /**
     * get port
     * @param url
     */
	port(url: string): number
    /**
     * a test function
     * @param url
     * @param num
     */
	testFoo(url: string, num: number): string
}

interface UrlObject {
	href: string,
	hash: string,
	search: string,
	host?: string,
	hostname?: string,
	origin?: string,
	pathname?: string,
	port?: string,
	protocol?: string,
}

export interface ZaxUrl {
    /**
     * parse url to object
     * @param url
     */
	parse(url: string): UrlObject
    /**
     * get key of value of url
     * @param url
     * @param key
     */
	get(url: string, key: string): string
    /**
    * get key of value of url
    * @param url
    * @param key
    */
	get(key: string): string
    /**
     * set & get new url
     * @param key
     * @param value
     */
	set(key: string, value: string): string
    /**
     * set & get new url
     * @param url
     * @param key
     * @param value
     */
	set(url: string, key: string, value: string): string
    /**
     * delete key & get new url
     * @param url
     * @param key
     */
	del(url: string, key: string): string
    /**
     * get url search part
     * @param url
     */
	search(url: string): string
    /**
     * get url hash part
     * @param url
     */
	hash(url: string): string
    /**
     * get last url part
     * @param url
     * @param pos
     */
	pathKey(url: string, pos: number = 0): string

}

declare const zaxUrl: ZaxUrl
declare const zaxUtil: ZaxUtil

