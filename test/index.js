let { zaxUrl } = require('zax-url')

// parse
console.group('parse')
console.log(zaxUrl.parse('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))
console.groupEnd()

// get
console.group('get')
console.log(zaxUrl.get('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin'))
console.log(zaxUrl.get('bizOrigin'))
console.groupEnd()

// set
console.group('set')
console.log(zaxUrl.set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', 'baz'))
console.log(zaxUrl.set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', null))
console.log(zaxUrl.set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', ''))
console.log(zaxUrl.set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', undefined))
console.log(zaxUrl.set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', { isMiniProgram: 'true', bizOrigin: 1, openId: 2, appCode: 3, hidden: '1', v: 2222222 }))
console.groupEnd()

// del
console.group('del')
console.log(zaxUrl.del('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin'))
console.groupEnd()

// search
console.group('search')
console.log(zaxUrl.search('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))
console.groupEnd()

// hash
console.group('hash')
console.log(zaxUrl.hash('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))
console.groupEnd()

// pathKey
console.group('pathKey')
console.log(zaxUrl.pathKey('pages/main/index?bizOrigin=foo#tag=1234'))
console.log(zaxUrl.pathKey('pages/main/index?bizOrigin=foo'))
console.log(zaxUrl.pathKey('pages/main/index#tag1234'))
console.log(zaxUrl.pathKey('pages/main/p321#tag1234', 1))
console.groupEnd()

//
