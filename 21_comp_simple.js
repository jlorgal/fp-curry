'use strict';

const R = require('ramda');

let incr = x => x + 1;
let dupl = x => x * 2;

console.log(incr(dupl(5))); // 11
console.log(R.compose(incr, dupl)(5)); // 11
console.log(R.pipe(dupl, incr)(5)); // 11
