const accountData = require("./accounts_data.js");
const getAccountByID = (userID) =>
  accountData.find((acc) => acc.userID === userID);

getAccountByID("js");
