'use strict';

// because JavaScript has a limited standard lib,
// we want to globally expose some libraries we use in every files
// instead of require them everytime. #tradeoff
global.assert = require('assert');
global.when = require('when');
global._ = require('lodash');
