const sumAll = function(start, end) {
  if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
  if (start < 0 || end < 0) return 'ERROR';

  let min = start;
  let max = end;

  if (start > end) {
    min = end;
    max = start;
  }

  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
