'use strict';

// You must require this file inside each tests
// or use mocha -r bootstrap.test.js
// (-r === require file)

require('./bootstrap');

global.t = require('chai').assert;

global.JSONPackage = require('./package.json');

global.getServer = () => {
  return require('./src')(global.JSONPackage, {
    info: _.noop,
    debug: _.noop,
    log: _.noop,
    error: console.error.bind(console) // eslint-disable-line no-console
  });
};
