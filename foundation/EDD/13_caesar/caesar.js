// Better solution: https://github.com/TheOdinProject/javascript-exercises/blob/solutions/caesar/caesar.js
// const mod = (n, m) => (n % m + m) % m;
const caesar = function(str, shift) {
  const NUM_OF_CHAR = 26;
  const TO_LOWER = 32;
  const UPPER_A_CHAR_CODE = 65;
  const UPPER_Z_CHAR_CODE = 90;
  const LOWER_A_CHAR_CODE = 97;
  const LOWER_Z_CHAR_CODE = 122;

  let result = '';

  [...str].forEach((char) => {
    let charCode = char.charCodeAt();
    let upperCased = false;

    if (charCode <= UPPER_Z_CHAR_CODE && charCode >= UPPER_A_CHAR_CODE) {
      upperCased = true;
      // Make it lower case
      charCode += TO_LOWER;
    }

    if (charCode >= LOWER_A_CHAR_CODE && charCode <= LOWER_Z_CHAR_CODE) {
      let s = Math.abs(shift) % NUM_OF_CHAR;
      if (shift < 0) s *= -1;

      // Make it circular
      if (charCode + s > LOWER_Z_CHAR_CODE) {
        charCode = (charCode + s) % LOWER_Z_CHAR_CODE + LOWER_A_CHAR_CODE - 1;
      } else if (charCode + s < LOWER_A_CHAR_CODE) {
        charCode = LOWER_Z_CHAR_CODE - LOWER_A_CHAR_CODE % (charCode + s) + 1;
      } else charCode += s;
    }

    result += upperCased ? String.fromCharCode(charCode).toUpperCase() : String.fromCharCode(charCode);
  });

  return result;
};

// console.log(caesar('Mjqqt, Btwqi!', -5))
// Do not edit below this line
module.exports = caesar;
