const calculator = (() => {
  const add = function(x, y) {
    return x + y;
  };

  const subtract = function(x, y) {
    return x - y;
  };

  const multiply = function(arr) {
    return arr.reduce((acc, x) => acc * x, 1);
  };

  const divide = function(arr) {
    return arr.reduce((acc, x) => acc / x);
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

  const operate = function(op, num1, num2) {
    if (op === '+') return add(num1, num2);
    if (op === '-') return subtract(num1, num2);
    if (op === 'x') return multiply([num1, num2]);
    if (op === '/') return divide([num1, num2]);
    return;
  };

  return {
    add,
    subtract,
    multiply,
    divide,
    power,
    operate,
    factorial,
  };
})();

// module.exports = calculator;
