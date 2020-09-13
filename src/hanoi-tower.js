const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 1;
  if (disksNumber > 1) {
    for(let i = 1; i < disksNumber; i++) {
      turns = (turns * 2) + 1;
    }
  }
  let seconds = Math.floor(3600 / turnsSpeed * turns);

  return {
    turns,
    seconds,
  }
};
