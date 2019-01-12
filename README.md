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
zaxUrl.parse('pages/main/index?bizOrigin=foo#bizOrigin=bar')
~~~

~~~ javascript
{ href: 'pages/main/index?bizOrigin=foo#bizOrigin=bar',
  hash: '#bizOrigin=bar',
  search: '?bizOrigin=foo' }
~~~

. **get**
~~~ javascript
zaxUrl.get('pages/main/index?bizOrigin=foo#bizOrigin=bar', 'bizOrigin')
~~~

~~~ javascript
foo
~~~

. **set**
~~~ javascript
zaxUrl.set('pages/main/index?bizOrigin=foo#bizOrigin=bar', 'bizOrigin', 'baz')
~~~

~~~ javascript
pages/main/index?bizOrigin=baz#bizOrigin=bar
~~~

. **del**
~~~ javascript
zaxUrl.del('pages/main/index?bizOrigin=foo#bizOrigin=bar', 'bizOrigin')
~~~

~~~ javascript
pages/main/index#bizOrigin=bar
~~~

. **search**
~~~ javascript
zaxUrl.search('pages/main/index?bizOrigin=foo#bizOrigin=bar')
~~~

~~~ javascript
{ bizOrigin: 'foo' }
~~~