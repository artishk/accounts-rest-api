const accountData = require("./accounts_data.js");
const getAccountByID = (ID) => accountData.find((acc) => acc.ID === ID);

module.exports = getAccountByID;
