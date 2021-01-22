const accountData = require("./accounts_data.js");
const updateAccountByID = (newAccountObject, id) => {
  let accountToUpdate = accountData.splice(
    accountData.findIndex((acc) => acc.ID === id),
    1,
    newAccountObject
  );

  return "Account Balance Updated...";
};

module.exports = updateAccountByID;
