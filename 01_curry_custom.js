'use strict';

let multiply = function(x, y) {
  if (y === undefined) {
    return function(y) {
      return x * y;
    }
  }
  return x * y;
};

console.log(multiply(2, 10)); // 20

let duplicate = multiply(2);
console.log(duplicate(10)); // 20
