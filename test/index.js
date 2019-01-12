let zaxUrl = require('../libs/umd')

// list all of function name
console.log(Object.keys(zaxUrl))

// parse
console.log(zaxUrl.parse('pages/main/index?bizOrigin=foo#bizOrigin=bar'))

// get
console.log(zaxUrl.get('pages/main/index?bizOrigin=foo#bizOrigin=bar'), 'bizOrigin')

// set
console.log(zaxUrl.set('pages/main/index?bizOrigin=foo#bizOrigin=bar', 'bizOrigin', 'baz'))

// del
console.log(zaxUrl.del('pages/main/index?bizOrigin=foo#bizOrigin=bar', 'bizOrigin'))

// search
console.log(zaxUrl.search('pages/main/index?bizOrigin=foo#bizOrigin=bar'))