const accountData = require("./accounts_data");
const getAllAccount = require("./getAllAccounts");
const getAccountByID = require("./getAccountByID");
const deleteAccountByID = require("./deleteAccountByID");
const updateAccountBalanceByID = require("./updateAccountBalanceByID");
const createNewAccount = require("./createNewAccount");

const express = require("express");
const app = express();

app.listen(9191, function () {
  console.log("Server started on port 9191");
});
