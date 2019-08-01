/**
 * url module with server & client & miniprogram side
 */

'use strict'

import { ZaxUtil, ZaxUrl } from '../types/index'
interface IKV {
	[key: string]: string | number
}

let zaxUtil: ZaxUtil = {
	strToObj(query) {
		return query.split('&').reduce((sum: IKV, item: string) => {
			let arr = item.split('=')
			arr[0] && (sum[arr[0]] = arr[1])
			return sum
		}, {})
	},
	objToStr(params: IKV) {
		return Object.keys(params)
			.reduce(
				(sum: string[], item: string) => {
					sum.push(`${item}=${params[item]}`)
					return sum
				},
				['']
			)
			.join('&')
	},
	port(protocol) {
		switch (protocol) {
			case 'http:':
				return '80'
			case 'https:':
				return '443'
			default:
				return location.port
		}
	}
}

function get(key: string): string
function get(url: string, key: string): string
function get(...args: string[]) {
	let [url, key] = args
	if (arguments.length == 1) {
		key = url
		if (typeof document != 'undefined') {
			//client side
			url = location.href
		} else {
			if (typeof wx != 'undefined') {
				//miniprogram
				let pages = getCurrentPages()
				let len = pages.length
				let cur = pages[len - 1]
				let { route, options } = cur.route
				url = route + options
			}
		}
	}
	if (!url) {
		console.log('url param lost')
		return ''
	}
	let searchObj = zaxUrl.search(url)
	return searchObj[key] || ''
}

function set(url: string, key: string, value: string): string
function set(key: string, value: string): string
function set(url: any, key: string, value = '') {
	if (!key) {
		console.log('key can not be null')
		return url
	}

	let searchObj = zaxUrl.search(url) as IKV

	if (arguments.length == 2 && Object.prototype.toString.call(key) === '[object Object]') {
		Object.assign(searchObj, key)
	} else if (value === '' || value === null || value === undefined) {
		delete searchObj[key]
	} else {
		searchObj[key] = value
	}

	let res = zaxUtil.objToStr(searchObj)

	let hash = zaxUrl.parse(url).hash
	let tmp = url.replace(hash, '')
	let askIdx = tmp.indexOf('?')

	askIdx = askIdx > -1 ? askIdx : tmp.length

	let left = url.slice(0, askIdx)
	let mid = res ? '?' + res : ''
	let right = hash

	return left + mid + right
}

export const zaxUrl: ZaxUrl = {
	parse(url) {
		if (typeof document != 'undefined') {
			// client side
			let a = document.createElement('a')
			a.href = url
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
			}
		} else {
			//mini program & server side
			let hash = url.slice(url.lastIndexOf('#') > -1 ? url.lastIndexOf('#') : url.length) || ''
			let tmp = url.replace(hash, '')
			let search = tmp.slice(tmp.lastIndexOf('?') > -1 ? tmp.lastIndexOf('?') : tmp.length) || ''
			return {
				href: url,
				hash,
				search
			}
		}
	},
	get,
	set,
	del(url, key) {
		return this.set(url, key, '')
	},
	search(url) {
		let search = this.parse(url).search.replace('?', '')
		if (!search) {
			// console.log('no search char');
			return {}
		}
		return zaxUtil.strToObj(search)
	},
	hash(url) {
		let hash = this.parse(url).hash.replace('#', '')
		if (!hash) {
			console.log('no hash char')
			return ''
		}
		return hash
	},
	pathKey: (url, pos = 0) => {
		let last = url.split('/').pop() || ''
		return last.split(/\?|\#/)[0].slice(pos)
	}
}
