const accountData = require("./accounts_data");
const getAccountsWithBalanceGreaterThan = (bal) =>
  accountData.filter((acc) => acc.balance > bal);
module.exports = getAccountsWithBalanceGreaterThan;
