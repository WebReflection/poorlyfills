tressa.log('# ES6 collections poorlyfills');
tressa.assert(
  typeof Map === 'function' &&
  typeof Map === typeof Set &&
  typeof WeakMap === typeof WeakSet &&
  typeof Map === typeof WeakMap,
  'all functions'
);
tressa.assert(!/native/.test(WeakSet), 'testing poorlyfill');

tressa.log('## Map');
const m = new Map;
tressa.assert(m.has(Math) === false, 'empty map has no keys');
tressa.assert(m.get(Math) === undefined, 'no key, no value');
tressa.assert(m.set(Math, String) === m, 'set returns the map');
tressa.assert(m.has(Math) === true, 'added key is available');
tressa.assert(m.get(Math) === String, 'if key, then value');
m.set(Math, Object);
tressa.assert(m.get(Math) === Object, 'overwrite key');
tressa.assert(m.size === 1, 'correct size');
for(let key of m.keys())
  tressa.assert(key === Math, 'correct key');
for(let value of m.values())
  tressa.assert(value === Object, 'correct value');
for(let entry of m.entries())
  tressa.assert(entry[0] === Math && entry[1] === Object, 'correct entries');
m.forEach(
  function (value, key, collection) {
    tressa.assert(value === Object, 'forEach value');
    tressa.assert(key === Math, 'forEach key');
    tressa.assert(m === collection, 'forEach collection');
    tressa.assert(this === Array, 'forEach context');
  },
  Array
);
tressa.assert(m.delete(Math) === true, 'removed known key');
tressa.assert(m.size === 0, 'deleted entry, reduced size');
tressa.assert(m.get(Math) === undefined, 'deleted key, no value');
tressa.assert(m.delete(Math) === false, 'removed unknown key');
m.set(Math, String);
m.clear();
tressa.assert(m.get(Math) === undefined, 'cleared keys, no values');
tressa.assert(m.size === 0, 'cleared keys, zero size');

tressa.log('## Set');
const s = new Set;
tressa.assert(!s.get && !s.set, 'set has no get/set methods');
tressa.assert(s.has(Math) === false, 'empty set has no keys');
tressa.assert(s.add(Math) === s, 'add returns the set');
tressa.assert(s.has(Math) === true, 'added key is available');
tressa.assert(s.size === 1, 'correct size');
for(let key of s.keys())
  tressa.assert(key === Math, 'correct key');
for(let value of s.values())
  tressa.assert(value === Math, 'correct value');
for(let entry of s.entries())
  tressa.assert(entry[0] === Math && entry[1] === entry[0], 'correct entries');
m.forEach(
  function (value, key, collection) {
    tressa.assert(value === Math, 'forEach value');
    tressa.assert(key === value, 'forEach key');
    tressa.assert(s === collection, 'forEach collection');
    tressa.assert(this === Array, 'forEach context');
  },
  Array
);
tressa.assert(s.delete(Math) === true, 'removed known key');
tressa.assert(s.size === 0, 'deleted key, reduced size');
tressa.assert(s.has(Math) === false, 'deleted key, not present');
tressa.assert(s.delete(Math) === false, 'removed unknown key');
s.add(Math);
s.clear();
tressa.assert(s.has(Math) === false, 'cleared keys, no values');
tressa.assert(s.size === 0, 'cleared keys, zero size');

tressa.log('## WeakMap');
const wm = new WeakMap;
tressa.assert(wm.has(Math) === false, 'empty weak map has no keys');
tressa.assert(wm.get(Math) === undefined, 'no key, no value');
tressa.assert(wm.set(Math, String) === wm, 'set returns the weak map');
tressa.assert(wm.has(Math) === true, 'added key is available');
tressa.assert(wm.get(Math) === String, 'if key, then value');
wm.set(Math, Object);
tressa.assert(wm.get(Math) === Object, 'overwrite key');
tressa.assert(wm.delete(Math) === true, 'removed known key');
tressa.assert(wm.get(Math) === undefined, 'deleted key, no value');
tressa.assert(wm.delete(Math) === false, 'removed unknown key');


tressa.log('## WeakSet');
const ws = new WeakSet;
tressa.assert(ws.has(Math) === false, 'empty weak set has no keys');
tressa.assert(ws.add(Math) === ws, 'add returns the weak set');
tressa.assert(ws.has(Math) === true, 'added key is available');
tressa.assert(ws.delete(Math) === true, 'removed known key');
tressa.assert(ws.has(Math) === false, 'deleted key, not present');
tressa.assert(ws.delete(Math) === false, 'removed unknown key');