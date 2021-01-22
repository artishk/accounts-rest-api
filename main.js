const express = require("express");
const cors = require("cors");
const accountData = require("./accounts_data");
const getAllAccounts = require("./getAllAccounts");
const getAccountByuserID = require("./getAccountByuserID");
const deleteAccountByID = require("./deleteAccountByID");
const updateAccountByID = require("./updateAccountByID");
const createNewAccount = require("./createNewAccount");
const getAccountsWithBalanceGreaterThan = require("./getAccountsWithBalanceGreaterThan");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/getAllAccounts", function (req, res) {
  res.send(getAllAccounts(accountData));
});

app.get("/getAccountByID/:ID", function (req, res) {
  res.send(getAccountByuserID(req.params.ID));
});
app.get("/getAccountsWithBalanceGreaterThan/:balance", function (req, res) {
  res.send(getAccountsWithBalanceGreaterThan(req.params.balance));
});
app.delete("/deleteAccountByID/:userId", function (req, res) {
  res.send(deleteAccountByID(req.params.userId));
});
app.post("/updateAccountByID/:userId", function (req, res) {
  res.send(updateAccountByID(req.body, req.params.userId));
});
app.post("/createNewAccount", function (req, res) {
  res.send(createNewAccount(req.body));
});

app.listen(9191, function () {
  console.log("Server started on port 9191");
});
