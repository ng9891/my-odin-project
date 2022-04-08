// Practicing recursion.
const reverseStringR = function(str) {
  if (str === '') return '';
  let reverse = reverseString(str.substr(1)) + str.charAt(0);
  return reverse;
};

const reverseString = (str) => {
  return str.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
