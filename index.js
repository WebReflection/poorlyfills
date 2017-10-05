/*! (c) 2017 Andrea Giammarchi @WebReflection, (ISC) */

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
    entries: () => k.map((key, i) => [key, v[i]]),
    delete: obj => has(obj) && k.splice(i, 1) && !!v.splice(i, 1),
    forEach(fn, self) {
      v.forEach((value, i) => fn.call(self, value, k[i], this));
    },
    set(obj, value) {
      return (has(obj) ?
        (v[i] = value) :
        (v[k.push(obj) - 1] = value)
      ), this;
    }
  };
};

export const Set = window.Set || function Set() {
  const m = new Map;
  const set = m.set;
  delete m.get;
  delete m.set;
  m.add = obj => set.call(m, obj, obj);
  return m;
};

let i = 0;
const hOP = {}.hasOwnProperty;
export const WeakMap = window.WeakMap || function WeakMap() {
  const id = '__' + [i++, Math.random()];
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
  const wm = new WeakMap;
  return {
    has: obj => wm.get(obj) === true,
    delete: wm.delete,
    add(obj) {
      wm.set(obj, true);
      return this;
    }
  };
};
