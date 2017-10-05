/*! (c) 2017 Andrea Giammarchi, @WebReflection (ISC) */

export const Map = window.Map || function Map() {
  let i, k, v;
  const clear = () => { k = []; v = []; };
  const has = obj => -1 < (i = k.indexOf(obj));
  return clear(), {
    get size() { return k.length; },
    has,
    clear,
    get: obj => v[k.indexOf(obj)],
    keys: () => k.slice(),
    values: () => v.slice(),
    entries: () => k.map((key, i) => [key, value[i]]),
    delete: obj => has(obj) && k.splice(i, 1) && !!v.splice(i, 1),
    forEach(fn, self) {
      v.forEach((value, i) => fn(value, k[i], this), self);
    },
    set(obj, value) {
      if (!has(obj)) i = k.length;
      k[i] = obj;
      v[i] = value;
      return this;
    }
  };
};

export const Set = window.Set || function Set() {
  const m = new Map;
  return {
    // ignored: entries, forEach
    get size() { return m.size; },
    has: obj => m.has(obj),
    clear: m.clear,
    values: obj => m.keys(obj),
    keys: m.keys,
    add: obj => m.set(obj, 1),
    delete: m.delete
  };
};

let i = 0;
const uid = () => '__' + [i++, Math.random()];

const hOP = {}.hasOwnProperty;
export const WeakMap = window.WeakMap || function WeakMap() {
  const id = uid();
  const has = obj => hOP.call(obj, id);
  return {
    has,
    get: obj => obj[id],
    delete: obj => has(obj) && delete obj[id],
    set(obj, value) {
      Object.defineProperty(obj, id, {
        configurable: true,
        value
      });
      return this;
    }
  };
};

export const WeakSet = window.WeakSet || function WeakSet() {
  const id = uid();
  const wm = new WeakMap;
  return {
    has: obj => wm.get(obj) === id,
    add: obj => wm.set(obj, id),
    delete: wm.delete
  };
};
