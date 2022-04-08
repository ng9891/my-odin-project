const palindromes = function(str) {
  let string = str.toLowerCase().replace(/\s|,|!|\./g, ''); // Regex could also be /[^a-z]/g
  return string === string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
