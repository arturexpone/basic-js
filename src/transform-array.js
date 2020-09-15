const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('err');
  const sortArray = [];
  arr.forEach((value, i) => {
    switch(value) {
      case '--discard-next':
      case '--discard-prev':
      case '--double-next':
      case '--double-prev':
        return;
    }

    const decrement = arr[i - 1];
    const increment = arr[i + 1];

    if (decrement === '--discard-next') return;
    if (decrement === '--double-next') {
      sortArray.push(value, value)
    } else {
      sortArray.push(value);
    }

    if (increment === '--double-prev') {
      sortArray.push(value);
    } else if (increment === '--discard-prev') {
      sortArray.length = sortArray.length - 1;
    }

  })
  return sortArray;
};
