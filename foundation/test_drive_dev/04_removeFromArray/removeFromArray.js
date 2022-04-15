const removeFromArray = function(arr, ...arg) {
  const result = arr.filter((arrEl) => {
    return !arg.includes(arrEl);
  });
  return result;
};

// Function DEPRECATED
// Didnt know about Array includes().
const old_removeFromArray = function(arr, ...arg) {
  const result = arr.filter((arrEl) => {
    let keep = true;
    arg.forEach((argEl) => {
      if (arrEl === argEl) keep = false;
    });
    return keep;
  });
  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
