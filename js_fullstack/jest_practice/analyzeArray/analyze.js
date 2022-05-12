const analyzeArr = (arr) => {
  if (!arr || arr.length === 0) return;
  if (!Array.isArray(arr)) return;

  const result = arr.reduce(
    (prev, curr, idx) => {
      const min = curr < prev.min ? curr : prev.min;
      const max = curr > prev.max ? curr : prev.max;
      const sum = prev.sum + curr;
      const length = idx + 1;

      return {min, max, length, sum};
    },
    {min: Infinity, max: -Infinity, length: 0, sum: 0}
  );

  result.avg = result.sum / result.length;
  const {min, max, avg, length} = result;

  return {min, max, avg, length};
};

module.exports = {
  analyzeArr,
};
