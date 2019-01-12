# ZAX Url Util
## there have 6 modes of amd, cjs, es, iife, system, umd. 

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
~~~

~~~ javascript
pages/main/index?bizOrigin=baz&other=quz#/path/id=3?bizOrigin=bar
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

~~~ javascript
/path/id=3?bizOrigin=bar
~~~