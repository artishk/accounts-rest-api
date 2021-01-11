const accountData = require("./accounts_data.js");
const deleteAccountByID = (userID) => {
  const index = accountData.findIndex((acc) => acc.userID === userID);
  accountData.splice(index, 1);
};

module.exports = deleteAccountByID();
