let zaxUrl = require('../libs/umd')

// list all of function name
console.log(Object.keys(zaxUrl))
console.log('\r\n')

// parse
console.log(zaxUrl.parse('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))
console.log('\r\n')

// get
console.log(zaxUrl.get('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin'))
console.log('\r\n')

// set
console.log(zaxUrl.set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', 'baz'))
console.log('\r\n')

// del
console.log(zaxUrl.del('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin'))
console.log('\r\n')

// search
console.log(zaxUrl.search('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))
console.log('\r\n')

// hash
console.log(zaxUrl.hash('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar'))
console.log('\r\n')
