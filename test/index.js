let zaxUrl = require('../libs/umd')

// parse
console.log('parse')
console.log(zaxUrl.parse('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))

// get
console.log('get')
console.log(zaxUrl.getUrl('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin'))

// set
console.log('set')
console.log(zaxUrl.set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', 'baz'))
console.log(zaxUrl.set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', { isMiniProgram: 'true', bizOrigin: 1, openId: 2, appCode: 3, hidden: '1', v: 2222222 }))

// del
console.log('del')
console.log(zaxUrl.del('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin'))

// search
console.log('search')
console.log(zaxUrl.search('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))

// hash
console.log('hash')
console.log(zaxUrl.hash('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))

// pathKey
console.log('pathKey')
console.log(zaxUrl.pathKey('pages/main/index?bizOrigin=foo#tag=1234'))
console.log(zaxUrl.pathKey('pages/main/index?bizOrigin=foo'))
console.log(zaxUrl.pathKey('pages/main/index#tag1234'))
console.log(zaxUrl.pathKey('pages/main/p321#tag1234', 1))


//