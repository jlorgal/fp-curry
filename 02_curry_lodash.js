'use strict';

const _ = require('lodash');

let mult = (x, y) => x * y;
let multiply = _.curry(mult);

console.log(multiply(2, 10)); // 20

let duplicate = multiply(2);
console.log(duplicate(10)); // 20
