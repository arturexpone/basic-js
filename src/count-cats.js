const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  return array.reduce((accumulator, arr) => accumulator + arr.reduce((a, b) => b === '^^' ? a + 1 : a, 0), 0)
};
