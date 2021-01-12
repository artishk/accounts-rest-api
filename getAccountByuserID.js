const accountData = require("./accounts_data.js");
const getAccountByuserID = (userID) =>
  accountData.find((acc) => acc.userID === userID);

module.exports = getAccountByuserID;
