const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  console.log(`activity123123: ` + sampleActivity)
  if (!sampleActivity) {
    return false
  }
  return 122
};

// function dateSample(sampleActivity) {
//   console.log(sampleActivity)
// };
//
// console.log(dateSample())