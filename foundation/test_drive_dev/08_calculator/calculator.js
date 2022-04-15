const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  return arr.reduce((acc, x) => acc + x, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, x) => acc * x, 1);
};

const power = function(x, pow) {
  return x ** pow;
};

const factorial = function(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum = multiply([sum, i]);
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
