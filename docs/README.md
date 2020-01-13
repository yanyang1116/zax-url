<a name="module_zaxUrl"></a>

## zaxUrl
<p>support server &amp; client &amp; miniprogram side</p>

**See**: https://github.com/jsonchou/zax-url  
**Author**: jsonchou  

* [zaxUrl](#module_zaxUrl)
    * [~get(url, key)](#module_zaxUrl..get) ⇒ <code>String</code>
    * [~set(url, key, value)](#module_zaxUrl..set) ⇒ <code>String</code>
    * [~del(url, key)](#module_zaxUrl..del) ⇒ <code>String</code>
    * [~parse(url)](#module_zaxUrl..parse) ⇒ <code>UrlObject</code>
    * [~search(url)](#module_zaxUrl..search) ⇒ <code>IKV</code>
    * [~hash(url)](#module_zaxUrl..hash) ⇒ <code>String</code>
    * [~pathKey(url, pos)](#module_zaxUrl..pathKey) ⇒ <code>String</code>
    * [~extname(url)](#module_zaxUrl..extname) ⇒ <code>String</code>
    * [~basename(url)](#module_zaxUrl..basename) ⇒ <code>String</code>
    * [~pathmain(url)](#module_zaxUrl..pathmain) ⇒ <code>String</code>

<a name="module_zaxUrl..get"></a>

### zaxUrl~get(url, key) ⇒ <code>String</code>
<p>get value from url search part</p>

**Kind**: inner method of [<code>zaxUrl</code>](#module_zaxUrl)  
**Returns**: <code>String</code> - <p>string of result</p>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>url</p> |
| key | <code>String</code> | <p>key</p> |

**Example**  
```js
get("pages/index?id=2", 'id')
=> 2
get('id')
=> '' //empty
```
<a name="module_zaxUrl..set"></a>

### zaxUrl~set(url, key, value) ⇒ <code>String</code>
<p>set &amp; get new url</p>

**Kind**: inner method of [<code>zaxUrl</code>](#module_zaxUrl)  
**Returns**: <code>String</code> - <p>new url</p>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>url</p> |
| key | <code>String</code> | <p>key</p> |
| value | <code>String</code> | <p>value</p> |

**Example**  
```js
set("pages/index?id=2", 'foo','bar')
=> pages/index?id=2&foo=bar
```
<a name="module_zaxUrl..del"></a>

### zaxUrl~del(url, key) ⇒ <code>String</code>
<p>delete key &amp; get new url</p>

**Kind**: inner method of [<code>zaxUrl</code>](#module_zaxUrl)  
**Returns**: <code>String</code> - <p>new url</p>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>url</p> |
| key | <code>String</code> | <p>key</p> |

**Example**  
```js
del("pages/index?id=2", 'id')
=> pages/index
```
<a name="module_zaxUrl..parse"></a>

### zaxUrl~parse(url) ⇒ <code>UrlObject</code>
<p>get key of value of url</p>

**Kind**: inner method of [<code>zaxUrl</code>](#module_zaxUrl)  
**Returns**: <code>UrlObject</code> - <p>parse object</p>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>url</p> |

**Example**  
```js
parse("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
=> {
	host: 'demo.com',
	hostname: 'demo.com',
	href: mixUrl,
	origin: 'https://demo.com',
	pathname: '/index',
	port: '443',
	protocol: 'https:',
	hash: '#/path/id=3?bizOrigin=bar',
	search: '?bizOrigin=foo&other=quz'
}
```
<a name="module_zaxUrl..search"></a>

### zaxUrl~search(url) ⇒ <code>IKV</code>
<p>get url search part</p>

**Kind**: inner method of [<code>zaxUrl</code>](#module_zaxUrl)  
**Returns**: <code>IKV</code> - <p>url search part</p>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>url</p> |

**Example**  
```js
search("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
=> { bizOrigin: 'foo', other: 'quz' }
```
<a name="module_zaxUrl..hash"></a>

### zaxUrl~hash(url) ⇒ <code>String</code>
<p>get url hash part without # prefix</p>

**Kind**: inner method of [<code>zaxUrl</code>](#module_zaxUrl)  
**Returns**: <code>String</code> - <p>url hash part</p>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>url</p> |

**Example**  
```js
hash("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
=> /path/id=3?bizOrigin=bar
```
<a name="module_zaxUrl..pathKey"></a>

### zaxUrl~pathKey(url, pos) ⇒ <code>String</code>
<p>get last url part of key</p>

**Kind**: inner method of [<code>zaxUrl</code>](#module_zaxUrl)  
**Returns**: <code>String</code> - <p>key path</p>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| url | <code>String</code> |  | <p>url</p> |
| pos | <code>Number</code> | <code>0</code> | <p>pos</p> |

**Example**  
```js
pathKey("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
=> index


pathKey("https://demo.com/p123?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar",1)
=> 123


pathKey("https://demo.com/p-123?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar",2)
=> 123

```
<a name="module_zaxUrl..extname"></a>

### zaxUrl~extname(url) ⇒ <code>String</code>
<p>get extname from path</p>

**Kind**: inner method of [<code>zaxUrl</code>](#module_zaxUrl)  
**Returns**: <code>String</code> - <p>extname</p>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>url</p> |

**Example**  
```js
extname("/test/something/file.txt")
=> .txt

extname("/test/something/file")
=> '' // empty

```
<a name="module_zaxUrl..basename"></a>

### zaxUrl~basename(url) ⇒ <code>String</code>
<p>get basename from path</p>

**Kind**: inner method of [<code>zaxUrl</code>](#module_zaxUrl)  
**Returns**: <code>String</code> - <p>key path</p>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>url</p> |

**Example**  
```js
basename("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
=> index

basename("https://demo.com/dairy.txt?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
=> dairy.txt
```
<a name="module_zaxUrl..pathmain"></a>

### zaxUrl~pathmain(url) ⇒ <code>String</code>
<p>remove host and left pathname + search + hash</p>

**Kind**: inner method of [<code>zaxUrl</code>](#module_zaxUrl)  
**Returns**: <code>String</code> - <p>key path</p>  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | <p>url</p> |

**Example**  
```js
pathmain("https://demo.com/index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar")
=> /index?bizOrigin=foo&other=quz#/path/id=3?bizOrigin=bar
```
