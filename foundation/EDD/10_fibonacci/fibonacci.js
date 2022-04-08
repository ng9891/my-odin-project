const fibonacci = function(num) {
  if (!num || num < 0 || isNaN(num)) return 'OOPS';

  let fibNum = Number(num);
  let mem = {};
  mem[1] = 1;
  mem[2] = 1;

  if (fibNum < 2) return mem[fibNum];

  const fib = (num) => {
    if (num === 2) return 1;

    mem[num] = fib(num - 1) + mem[num - 2];

    return mem[num];
  };

  return fib(fibNum);
};

// Do not edit below this line
module.exports = fibonacci;
