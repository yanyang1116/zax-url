interface IZaxUrl {
    /**
     * parse url to object
     * @param url 
     */
    parse(url: string): object,
    /**
     * get key of value of url
     * @param url 
     * @param key 
     */
    get(url: string, key: string): string,
    /**
     * set & get new url
     * @param url 
     * @param key 
     * @param value 
     */
    set(url: string, key: string, value: string): string,
    /**
     * delete key & get new url 
     * @param url 
     * @param key 
     */
    del(url: string, key: string): string,
    /**
     * get url search part
     * @param url 
     */
    search(url: string): string,
    /**
     * get url hash part
     * @param url 
     */
    hash(url: string): string,
    /**
     * get last url part
     * @param url 
     * @param pos 
     */
    pathKey(url: string, pos: number = 0): string,
    /**
     * string to object
     * @param url 
     */
    _strToObj(url: string): object,
    /**
     * object to string
     * @param url 
     */
    _objToStr(url: string): string,
    /**
     * get port
     * @param url 
     */
    _port(url: string): number,
    /**
     * a test function
     * @param url 
     * @param num 
     */
    testFoo(url: string, num: number): string
}

declare const zaxUrl: IZaxUrl

export default zaxUrl


