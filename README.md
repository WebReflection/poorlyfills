# poorlyfills

[![License: ISC](https://img.shields.io/badge/License-ISC-yellow.svg)](https://opensource.org/licenses/ISC) [![Build Status](https://travis-ci.org/WebReflection/poorlyfills.svg?branch=master)](https://travis-ci.org/WebReflection/poorlyfills) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/poorlyfills/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/poorlyfills?branch=master) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/WebReflection/donate)

Simplified, partial, and poor ES6 collections polyfills, targeting IE9+ and older mobile browsers.

  * **Map** based on double private arrays and `indexOf(...)` quirks
  * **Set** based on a map with same values as keys
  * **WeakMap** based on a configurable, not enumerable, not writable, unique id property
  * **WeakSet** based on a WeakMap and a unique id as value

All collections are missing constructor functionality and Symbols features.


### How To

The [index.js](./index.js) file is an ES2015 module you can include in your projects as such:
```js
import {Map, Set, WeakMap, WeakSet} from 'poorlyfills';
```
The native `Map`, `Set`, `WeakMap`, and `Weakset` will always be preferred over the fallback.

If you'd like to simply include this package on your Web pages, you can do it via unpkg:
```html
<!doctype html>
<script src="https://unpkg.com/poorlyfills@latest/min.js"></script>
```


### Compatibility

You can test compatibility as both [ES2015 module](https://webreflection.github.io/poorlyfills/test/) and [ES5 transpiled](https://webreflection.github.io/poorlyfills/test/ie/) code for IE9+.




### ... but why ...

After [this tweet](https://twitter.com/WebReflection/status/915645417571983360), and [this request](https://twitter.com/_developit/status/915668536344883200), and after writing myself these partial polyfills dunno how many times, I've decided to make it an official, fully test covered, package.

