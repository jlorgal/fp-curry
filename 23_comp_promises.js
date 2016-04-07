'use strict';

const R = require('ramda');

let request = function(name) {
  return new Promise(function(resolve) {
    setTimeout(() => resolve('Hello ' + name), 5000);
  })
};

let lowerGreet = R.composeP(console.log, R.toLower, request);
lowerGreet('Jorge'); // hello jorge
