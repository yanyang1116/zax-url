# ZAX Url Util
## support SSR Miniprogram Browser side

## install

~~~ base
npm i zax-url -S
~~~

## build with rollup

~~~ base
npm run build
~~~

## use

~~~ javascript 
const zaxUrl = require('zax-url')
or
import zaxUrl from 'zax-url'
~~~


. **parse**
~~~ javascript
zaxUrl.parse('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')
~~~

~~~ javascript
{ href: 'pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar',
  hash: '#/path/id=3?bizOrigin=bar',
  search: '?bizOrigin=foo&other=quz' }
~~~

. **get**
~~~ javascript
zaxUrl.get('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin')
~~~

~~~ javascript
foo
~~~

. **set**
~~~ javascript
zaxUrl.set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', 'baz')
zaxUrl.set('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', {
    'isMiniProgram': 'true',
    'bizOrigin': 1,
    'openId': 2,
    'appCode': 3,
    'hidden': '1',
    'v': 2222222
})
~~~

~~~ javascript
pages/main/index?bizOrigin=baz&other=quz#/path/id=3?bizOrigin=bar
pages/main/index?bizOrigin=1&other=quz&isMiniProgram=true&openId=2&appCode=3&hidden=1&v=2222222#/path/id=3?bizOrigin=bar
~~~

. **del**
~~~ javascript
zaxUrl.del('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin')
~~~

~~~ javascript
pages/main/index?other=quz#/path/id=3?bizOrigin=bar
~~~

. **search**
~~~ javascript
zaxUrl.search('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')
~~~

~~~ javascript
{ bizOrigin: 'foo', other: 'quz' }
~~~

. **hash**
~~~ javascript
zaxUrl.hash('pages/main/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')
~~~

. **pathKey**
~~~ javascript
console.log(zaxUrl.pathKey('pages/main/index?bizOrigin=foo#tag=1234'))
console.log(zaxUrl.pathKey('pages/main/index?bizOrigin=foo'))
console.log(zaxUrl.pathKey('pages/main/index#tag1234'))
console.log(zaxUrl.pathKey('pages/main/p321#tag1234', 1))
~~~

~~~ javascript
index
index
index
321
~~~