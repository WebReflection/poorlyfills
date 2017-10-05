const fs = require('fs');
const path = require('path');

// the module has to be outside the test folder
fs.writeFileSync(
  path.join(__dirname, '..', 'index.c.js'),
  '((window)=>{\n' + 
  fs.readFileSync(
    path.join(__dirname, '..', 'index.js')
  ).toString()
  .replace(/export const /g, 'window.')
  .replace(/new ([A-Za-z]+)/g, 'new window.$1') +
  '\n})(this);'
);

// the test needs to require tressa and the module
fs.writeFileSync(
  path.join(__dirname, 'test.c.js'),
  "const tressa = require('tressa');\n" +
  "const {Map, Set, WeakMap, WeakSet} = require('../index.c.js');\n\n" +
  fs.readFileSync(
    path.join(__dirname, 'test.js')
  ).toString()
);