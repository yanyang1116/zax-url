# ZAX Url Util
## the has 6 modes of amd, cjs, es, iife, system, umd. 

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


. **compare**
~~~ javascript
zaxUrl.compare('2018/9/10','2018/9/6')
~~~

~~~ javascript
1
~~~

. **offset**
~~~ javascript
zaxUrl.format(zaxUrl.offset('2018/9/10', 'month', 2),'yyyy-mm-dd HH:MM:SS')
~~~

~~~ javascript
2018-11-10 00:00:00
~~~

. **ago**
~~~ javascript
zaxUrl.ago('2018/9/11')
~~~

~~~ javascript
2月前
~~~

. **format**
~~~ javascript
zaxUrl.format('2018/10/25', 'yyyy-mm-dd HH:MM')
~~~

~~~ javascript
2018-10-25 00:00
~~~

. **diff**
~~~ javascript
zaxUrl.diff('2018/10/27', '2018/10/26')
~~~

~~~ javascript
{ days: -1, hours: -0, minutes: -0, seconds: -0 }
~~~

. **age**
~~~ javascript
zaxUrl.age('2018/12/31',true)
~~~

~~~ javascript
7
~~~