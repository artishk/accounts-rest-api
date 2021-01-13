const accountData = require("./accounts_data");
const getAllAccounts = require("./getAllAccounts");
const getAccountByuserID = require("./getAccountByuserID");
const deleteAccountByID = require("./deleteAccountByID");
const updateAccountBalanceByID = require("./updateAccountBalanceByID");
const createNewAccount = require("./createNewAccount");
const getAccountsWithBalanceGreaterThan = require("./getAccountsWithBalanceGreaterThan");

const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.get("/getAllAccounts", function (req, res) {
  res.send(getAllAccounts(accountData));
});

app.get("/getAccountByuserID/:userId", function (req, res) {
  res.send(getAccountByuserID(req.params.userId));
});
app.get("/getAccountsWithBalanceGreaterThan/:balance", function (req, res) {
  res.send(getAccountsWithBalanceGreaterThan(req.params.balance));
});
app.get("/DELETE/:userId", function (req, res) {
  res.send(deleteAccountByID(req.params.userId));
});
app.get("/updateAccountBalanceByID/:userId/:balance", function (req, res) {
  res.send(updateAccountBalanceByID(req.params.userId, req.params.balance));
});

app.listen(9191, function () {
  console.log("Server started on port 9191");
});
