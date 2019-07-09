interface IZaxUrl {
    parse(url: string): object,
    get(url: string, key: string): string,
    set(url: string, key: string, value: string): string,
    del(url: string, key: string): string,
    search(url: string): string,
    hash(url: string): string,
    pathKey(url: string, pos: number = 0): string,
    _strToObj(url: string): object,
    _objToStr(url: string): string,
    _port(url: string): number,
    testFoo(url: string, num: number): string
}

declare const zaxUrl: IZaxUrl

export default zaxUrl


