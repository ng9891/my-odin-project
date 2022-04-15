const repeatString = function(str, repeat = 0) {
  if (repeat === 0) return '';
  if (repeat < 0) return 'ERROR';
  if (!str) return '';

  let concat = '';
  for (let i = 0; i < repeat; i++) {
    concat += str;
  }

  return concat;
};

// Do not edit below this line
module.exports = repeatString;
