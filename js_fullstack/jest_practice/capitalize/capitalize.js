const capitalize = (str) => {
  if (!str) return '';
  if (typeof str !== 'string') return;

  return str
    .trim()
    .split(' ')
    .map((substring) => {
      return substring[0].toUpperCase() + substring.slice(1);
    })
    .join(' ');
};

module.exports = {
  capitalize,
};
