const accountData = require("./accounts_data.js");
const updateAccountBalanceByID = (id, newBalance) => {
  const accountToUpdate = accountData.find((acc) => acc.userID === id);
  accountToUpdate.balance = newBalance;
  return "Account Balance Updated...";
};

module.exports = updateAccountBalanceByID;
