const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members && members.constructor === Array) {
    const newMembers = [];
    members.forEach(m => typeof m === 'string' ?
      newMembers.push(m.replace(/\s+/g, ' ').trim().toUpperCase()) : null);
    const res = newMembers.map(m => m).sort().reduce((a, m) => {
      return a + m[0]
    }, '');
    return res;
  }

  return false
};

