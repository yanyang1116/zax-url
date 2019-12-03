import { zaxUrl } from '../src/index'

import { log } from '../src/_utils/index'

let waitObj = {
	k: 0
}

const mixUrl = 'https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'

describe('zaxUrl', () => {
	let keys = Object.keys(zaxUrl)
	keys.forEach(par => {
		it(`should have ${par} method`, () => {
			expect(zaxUrl).toHaveProperty(par)
			expect(zaxUrl[par]).toBeInstanceOf(Function)
		})
	})

	it(`parse`, () => {
		expect(zaxUrl.parse(mixUrl)).toEqual({
			host: 'demo.com',
			hostname: 'demo.com',
			href: mixUrl,
			origin: 'https://demo.com',
			pathname: '/index',
			port: '443',
			protocol: 'https:',
			hash: '#/path/id=3?bizOrigin=bar',
			search: '?bizOrigin=foo&other=quz'
		})

		expect(zaxUrl.parse('https://demo.com/index')).toEqual({
			host: 'demo.com',
			hostname: 'demo.com',
			href: 'https://demo.com/index',
			origin: 'https://demo.com',
			pathname: '/index',
			port: '443',
			protocol: 'https:',
			hash: '',
			search: ''
		})

		expect(zaxUrl.parse('https://demo.com/index?id=1')).toEqual({
			host: 'demo.com',
			hostname: 'demo.com',
			href: 'https://demo.com/index?id=1',
			origin: 'https://demo.com',
			pathname: '/index',
			port: '443',
			protocol: 'https:',
			hash: '',
			search: '?id=1'
		})

		expect(zaxUrl.parse('https://demo.com/index#tag')).toEqual({
			host: 'demo.com',
			hostname: 'demo.com',
			href: 'https://demo.com/index#tag',
			origin: 'https://demo.com',
			pathname: '/index',
			port: '443',
			protocol: 'https:',
			hash: '#tag',
			search: ''
		})

		expect(zaxUrl.parse('')).toEqual({
			href: '',
			hash: '',
			search: '',
			pathname: ''
		})

		// wechat miniprograme path
		expect(zaxUrl.parse('pages/main/index')).toEqual({
			hash: '',
			host: 'localhost',
			hostname: 'localhost',
			href: 'http://localhost/pages/main/index',
			origin: 'http://localhost',
			pathname: '/pages/main/index',
			port: '80',
			protocol: 'http:',
			search: ''
		})

		// wechat miniprograme path
		expect(zaxUrl.parse('/pages/main/index')).toEqual({
			hash: '',
			host: 'localhost',
			hostname: 'localhost',
			href: 'http://localhost/pages/main/index',
			origin: 'http://localhost',
			pathname: '/pages/main/index',
			port: '80',
			protocol: 'http:',
			search: ''
		})

		// wechat miniprograme path
		expect(zaxUrl.parse('index')).toEqual({
			hash: '',
			host: 'localhost',
			hostname: 'localhost',
			href: 'http://localhost/index',
			origin: 'http://localhost',
			pathname: '/index',
			port: '80',
			protocol: 'http:',
			search: ''
		})

		expect(zaxUrl.parse('https://demo.com:9090/index#tag')).toEqual({
			host: 'demo.com:9090',
			hostname: 'demo.com',
			href: 'https://demo.com:9090/index#tag',
			origin: 'https://demo.com:9090',
			pathname: '/index',
			port: '9090',
			protocol: 'https:',
			hash: '#tag',
			search: ''
		})
	})

	it(`get`, () => {
		expect(zaxUrl.get(mixUrl, 'bizOrigin')).toEqual('foo')
		expect(zaxUrl.get('http://demo.com/?id=1', 'bizOrigin')).toEqual('')
		expect(zaxUrl.get('http://demo.com/?id=1', '')).toEqual('')
	})

	it(`set`, () => {
		expect(zaxUrl.set(mixUrl, 'bizOrigin', 'baz')).toEqual('https://demo.com/index?bizOrigin=baz&other=quz#/path/id=3?bizOrigin=bar')
		expect(zaxUrl.set(mixUrl, '', 'baz')).toEqual(mixUrl)
		expect(zaxUrl.set('http://demo.com/', 'foo', 'bar')).toEqual('http://demo.com/?foo=bar')
		expect(zaxUrl.set('http://demo.com', 'foo', 'bar')).toEqual('http://demo.com?foo=bar')
		expect(zaxUrl.set('http://demo.com?id=1', 'foo', 'bar')).toEqual('http://demo.com?id=1&foo=bar')
		expect(zaxUrl.set('http://demo.com/?id=1', 'foo', 'bar')).toEqual('http://demo.com/?id=1&foo=bar')
		expect(zaxUrl.set('http://demo.com?id=1#test', 'foo', 'bar')).toEqual('http://demo.com?id=1&foo=bar#test')
		expect(zaxUrl.set('http://demo.com/?id=1#test', 'foo', 'bar')).toEqual('http://demo.com/?id=1&foo=bar#test')

		expect(zaxUrl.set('https://a-uat.demo.com/p/83755233', 'accessKey', '123')).toEqual('https://a-uat.demo.com/p/83755233?accessKey=123')
		expect(
			zaxUrl.set(
				'https://static.demo.com/website/mobile/html/public/min-program-middle.html?hidden=1&appCode=ZABXMiniApp&v=0.&type=set&accessKey=&isMiniProgram=true&openId=%253D&backUrl=https%3A%2F%2Fa-uat.demo.com%2Fp%2F83755233%3FisMiniProgram%3Dtrue%26openId%3D%253D%26appCode%3DZABXMiniApp%26wxCode%%26hidden%3D1%26realChannelId%3D5%26v%3D1572328560526%23%2F%3FbizOrigin%3Dxcxsy_tj',
				'accessKey',
				'123'
			)
		).toEqual(
			'https://static.demo.com/website/mobile/html/public/min-program-middle.html?hidden=1&appCode=ZABXMiniApp&v=0.&type=set&accessKey=123&isMiniProgram=true&openId=%253D&backUrl=https%3A%2F%2Fa-uat.demo.com%2Fp%2F83755233%3FisMiniProgram%3Dtrue%26openId%3D%253D%26appCode%3DZABXMiniApp%26wxCode%%26hidden%3D1%26realChannelId%3D5%26v%3D1572328560526%23%2F%3FbizOrigin%3Dxcxsy_tj'
		)
	})

	it(`del`, () => {
		expect(zaxUrl.del(mixUrl, 'bizOrigin')).toEqual('https://demo.com/index?other=quz#/path/id=3?bizOrigin=bar')
	})

	it(`search`, () => {
		expect(zaxUrl.search(mixUrl)).toEqual({ bizOrigin: 'foo', other: 'quz' })
		expect(zaxUrl.search('https://demo.com/index#/path/id=3?bizOrigin=bar')).toEqual({})
	})

	it(`hash`, () => {
		expect(zaxUrl.hash(mixUrl)).toEqual('/path/id=3?bizOrigin=bar')
		expect(zaxUrl.hash('http://demo.com/path')).toEqual('')
	})

	it(`pathKey`, () => {
		expect(zaxUrl.pathKey(mixUrl)).toEqual('index')
		expect(zaxUrl.pathKey('')).toEqual('')
		expect(zaxUrl.pathKey('.')).toEqual('')
		expect(zaxUrl.pathKey('http://demo.com/')).toEqual('')
		expect(zaxUrl.pathKey('http://demo.com')).toEqual('')
		expect(zaxUrl.pathKey('http://demo.com', 1)).toEqual('')
		expect(zaxUrl.pathKey('http://demo.com', 0)).toEqual('')
		expect(zaxUrl.pathKey('http://demo.com/d987', 5)).toEqual('')
		expect(zaxUrl.pathKey('http://demo.com/d987', 1)).toEqual('987')
	})

	it(`basename`, () => {
		expect(zaxUrl.basename(mixUrl)).toEqual('index')
		expect(zaxUrl.basename('https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')).toEqual('index')
		expect(zaxUrl.basename('https://demo.com/index.html?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')).toEqual('index.html')
		expect(zaxUrl.basename('https://demo.com/log.txt?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')).toEqual('log.txt')
		expect(zaxUrl.basename('index')).toEqual('index')
		expect(zaxUrl.basename('log.txt')).toEqual('log.txt')
		expect(zaxUrl.basename('')).toEqual('')
	})

	it(`extname`, () => {
		expect(zaxUrl.extname(mixUrl)).toEqual('')
		expect(zaxUrl.extname('https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')).toEqual('')
		expect(zaxUrl.extname('https://demo.com/index.html?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')).toEqual('.html')
		expect(zaxUrl.extname('https://demo.com/log.txt?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')).toEqual('.txt')
		expect(zaxUrl.extname('index')).toEqual('')
		expect(zaxUrl.extname('http://demo.com/.txt')).toEqual('.txt')
		expect(zaxUrl.extname('http://demo.com')).toEqual('')
		expect(zaxUrl.extname('log.txt')).toEqual('.txt')
		expect(zaxUrl.extname('.txt')).toEqual('.txt')
		expect(zaxUrl.extname('.')).toEqual('')
		expect(zaxUrl.extname('')).toEqual('')
	})

	it(`pathmain`, () => {
		expect(zaxUrl.pathmain(mixUrl)).toEqual('/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')
		expect(zaxUrl.pathmain('https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')).toEqual('/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')
		expect(zaxUrl.pathmain('http://demo.com/d987')).toEqual('/d987')
		expect(zaxUrl.pathmain('http://demo.com/d987/dax')).toEqual('/d987/dax')
	})
})

describe('log', () => {
	it('should invoke success', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
	})

	it('should return a function', () => {
		let res = log('test')
		expect(log).toBeInstanceOf(Function)
		expect(res).toBeTruthy()
		expect(res).toBeInstanceOf(Function)

		let res2 = log('test', 'extra param')
		expect(log).toBeInstanceOf(Function)
		expect(res2).toBeTruthy()
		expect(res2).toBeInstanceOf(Function)

		let res3 = log()
		expect(res3).toBeTruthy()
		expect(res3).toBeInstanceOf(Function)
	})
})
