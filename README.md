# Zax Url
## support SSR & Miniprogram & Browser side

[![NPM version](https://img.shields.io/npm/v/zax-url.svg?style=flat)](https://www.npmjs.com/package/zax-url)
[![Build Status](https://travis-ci.org/jsonchou/zax-url.svg?branch=master)](https://travis-ci.org/jsonchou/zax-url)
[![codecov](https://codecov.io/gh/jsonchou/zax-url/branch/master/graph/badge.svg)](https://codecov.io/gh/jsonchou/zax-url)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

util module

## Browsers support

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Opera |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IE8+ Edge+                                                                                                                                                                                                      | last 10 versions                                                                                                                                                                                                  | last 10 versions                                                                                                                                                                                              | last 2 versions                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                                               | last 2 versions                                                                                                                                                                                           |

## Install

~~~ base
npm i zax-url -S
~~~

## build with rollup

~~~ base
npm run build
~~~

## use

~~~ javascript
const { zaxUrl } = require('zax-url')
or
import { zaxUrl } from 'zax-url'
~~~

. **parse**
~~~ javascript
zaxUrl.parse('https://demo.com/pages/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')
//=> { href: 'https://demo.com/pages/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar',
  		hash: '#/path/id=3?bizOrigin=bar',
  		search: '?bizOrigin=foo&other=quz' }
~~~

. **get**
~~~ javascript
zaxUrl.get('https://demo.com/pages/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin')
//=>foo
~~~

. **set**
~~~ javascript
zaxUrl.set('https://demo.com/pages/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', 'baz')
//=>https://demo.com/pages/index?bizOrigin=baz&other=quz#/path/id=3?bizOrigin=bar
zaxUrl.set('https://demo.com/pages/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', null)
//=>https://demo.com/pages/index?other=quz#/path/id=3?bizOrigin=bar
zaxUrl.set('https://demo.com/pages/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', '')
//=>https://demo.com/pages/index?other=quz#/path/id=3?bizOrigin=bar
zaxUrl.set('https://demo.com/pages/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin', undefined)
//=>https://demo.com/pages/index?other=quz#/path/id=3?bizOrigin=bar
zaxUrl.set('https://demo.com/pages/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', { isMiniProgram: 'true', bizOrigin: 1, openId: 2, appCode: 3, hidden: '1', v: 2222222 })
//=>https://demo.com/pages/index?bizOrigin=1&other=quz&isMiniProgram=true&openId=2&appCode=3&hidden=1&v=2222222#/path/id=3?bizOrigin=bar
~~~

. **del**
~~~ javascript
zaxUrl.del('https://demo.com/pages/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar', 'bizOrigin')
//=>https://demo.com/pages/index?other=quz#/path/id=3?bizOrigin=bar
~~~

. **search**
~~~ javascript
zaxUrl.search('https://demo.com/pages/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')
//{ bizOrigin: 'foo', other: 'quz' }
~~~

. **hash**
~~~ javascript
zaxUrl.hash('https://demo.com/pages/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar')
//=>/path/id=3?bizOrigin=bar
~~~

. **pathKey**
~~~ javascript
zaxUrl.pathKey('https://demo.com/pages/index?bizOrigin=foo#tag=1234')
//=>index
zaxUrl.pathKey('https://demo.com/pages/index?bizOrigin=foo')
//=>index
zaxUrl.pathKey('https://demo.com/pages/index#tag1234')
//=>index
zaxUrl.pathKey('https://demo.com/pages/index/p321#tag1234', 1)
//=>321
~~~

## [Docs](https://github.com/jsonchou/zax-url/tree/master/docs)


