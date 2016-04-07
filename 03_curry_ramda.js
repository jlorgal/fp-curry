'use strict';

const R = require('ramda');

let mult = (x, y) => x * y;
let multiply = R.curry(mult);

console.log(multiply(2, 10)); // 20

let duplicate = multiply(2);
console.log(duplicate(10)); // 20
