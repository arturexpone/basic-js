const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try { date.getTime(); } catch(e) { throw new Error(e); }

  const month = date.getMonth() + 1;
  if (month >= 3 && month < 6) return 'spring';
  if (month >= 6 && month < 9) return 'summer';
  if (month >= 9 && month < 12) return 'autumn';
  if (month === 12 || month === 1 || month === 2) return 'winter';
};
