let { parse, get, set, del, search, hash, pathKey, testFoo } = require('zax-url')

// parse
console.log('parse')
console.log(parse('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))

// get
console.log('get')
console.log(get('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin'))

// set
console.log('set')
console.log(set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', 'baz'))
console.log(set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', { isMiniProgram: 'true', bizOrigin: 1, openId: 2, appCode: 3, hidden: '1', v: 2222222 }))

// del
console.log('del')
console.log(del('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin'))

// search
console.log('search')
console.log(search('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))

// hash
console.log('hash')
console.log(hash('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))

// pathKey
console.log('pathKey')
console.log(pathKey('pages/main/index?bizOrigin=foo#tag=1234'))
console.log(pathKey('pages/main/index?bizOrigin=foo'))
console.log(pathKey('pages/main/index#tag1234'))
console.log(pathKey('pages/main/p321#tag1234', 1))



testFoo()










//