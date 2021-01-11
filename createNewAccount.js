const accountData = require("./accounts_data.js");

const addNewAccount = (newAccountObject) => {
  accountData.push(newAccountObject);
};

const newAccount = {
  owner: "Shash Tripathi",
  ID: "899b120a-ba4b-4d9f-955e-8a019687f4d3",
  bankName: "kalli bank ltd",
  accountNumber: "0009",
  IFSC_code: "0011",
  address: { city: "kalli", state: "kalli Pradesh", pin: 000003 },
  userID: "st",
  Movements: [900, -200, 340, -300, -20, 50, 400, -460],
  balance: 6000,
};

module.exports = addNewAccount;
