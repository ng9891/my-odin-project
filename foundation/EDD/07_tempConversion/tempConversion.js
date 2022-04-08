const ftoc = function(f) {
  const result = (f - 32) * (5 / 9);
  return result % 1 === 0 ? result : Number(result.toFixed(1));
};

const ctof = function(c) {
  const result = c * (9 / 5) + 32;
  return result % 1 === 0 ? result : Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
