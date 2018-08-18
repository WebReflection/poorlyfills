/*! (c) 2017 Andrea Giammarchi @WebReflection, (ISC) */

export var Map = window.Map || function Map() {
  var i = void 0,
      k = void 0,
      v = void 0;
  var clear = function clear() {
    k = [];v = [];
  };
  var has = function has(obj) {
    return -1 < (i = k.indexOf(obj));
  };
  return clear(), {
    get size() {
      return k.length;
    },
    has: has,
    clear: clear,
    get: function get(obj) {
      return v[k.indexOf(obj)];
    },
    keys: function keys() {
      return k.slice();
    },
    values: function values() {
      return v.slice();
    },
    entries: function entries() {
      return k.map(function (key, i) {
        return [key, v[i]];
      });
    },
    delete: function _delete(obj) {
      return has(obj) && k.splice(i, 1) && !!v.splice(i, 1);
    },
    forEach: function forEach(fn, self) {
      var _this = this;

      v.forEach(function (value, i) {
        return fn.call(self, value, k[i], _this);
      });
    },
    set: function set(obj, value) {
      return has(obj) ? v[i] = value : v[k.push(obj) - 1] = value, this;
    }
  };
};

export var Set = window.Set || function Set() {
  var m = new Map();
  var set = m.set;
  delete m.get;
  delete m.set;
  m.add = function (obj) {
    return set.call(m, obj, obj);
  };
  return m;
};

var i = 0;
var hOP = {}.hasOwnProperty;
export var WeakMap = window.WeakMap || function WeakMap() {
  var id = '__' + [i++, Math.random()];
  var has = function has(obj) {
    return hOP.call(obj, id);
  };
  return {
    has: has,
    get: function get(obj) {
      return obj[id];
    },
    delete: function _delete(obj) {
      return has(obj) && delete obj[id];
    },
    set: function set(obj, value) {
      Object.defineProperty(obj, id, {
        configurable: true,
        value: value
      });
      return this;
    }
  };
};

export var WeakSet = window.WeakSet || function WeakSet() {
  var wm = new WeakMap();
  return {
    has: function has(obj) {
      return wm.get(obj) === true;
    },
    delete: wm.delete,
    add: function add(obj) {
      wm.set(obj, true);
      return this;
    }
  };
};
