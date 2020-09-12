const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  return date ? date.getFullYear() : 'Unable to determine the time of year!';
};
