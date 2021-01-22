const accountData = require("./accounts_data.js");

const addNewAccount = (newAccountObject) => {
  accountData.push(newAccountObject);
  return true;
};

module.exports = addNewAccount;
