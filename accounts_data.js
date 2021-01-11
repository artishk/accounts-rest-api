const accounts1 = {
  owner: "Jonas Smith",
  ID: "f67a04eb-68f5-400b-9450-35f78fb3db50",
  bankName: "abc bank ltd",
  accountNumber: "0004",
  IFSC_code: "1111",
  address: { city: "lucknow", state: "Uttar Pradesh", pin: 226002 },
  userID: "js",
  Movements: [200, -200, 340, -300, -20, 50, 400, -460],
  balance: 4000,
};
const accounts2 = {
  owner: "Sarah Smith",
  ID: "3ae81586-0a25-4886-9e75-5ff7b969a374",
  bankName: "uco bank ltd",
  accountNumber: "0005",
  IFSC_code: "1112",
  address: { city: "sitapur", state: "Uttar Pradesh", pin: 226002 },
  userID: "ss",
  movemnets: [200, 200, 340, 300, -20, 50, 400, -460],
  balance: 4200,
};

const accounts3 = {
  owner: "Tracy Smith",
  ID: "2dc195d0-3363-4f59-8f01-8edf49773812",
  bankName: "xyz bank ltd",
  accountNumber: "0052",
  IFSC_code: "1113",
  address: { city: "kalli", state: "Uttar Pradesh", pin: 226002 },
  userID: "ts",
  movements: [200, -200, -340, -300, -20, 50, 400, -460],
  balance: 5200,
};

const accounts4 = {
  owner: "John Smith",
  ID: "a8fb16f4-5007-4cc8-904f-75afa9fff852",
  bankName: "abc bank ltd",
  accountNumber: "0007",
  IFSC_code: "1111",
  address: { city: "lucknow", state: "Uttar Pradesh", pin: 226002 },
  userID: "ks",
  movemnets: [200, -200, 340, 300, 20, 50, 400, -460],
  balance: 2000,
};
const accountsData = [accounts1, accounts2, accounts3, accounts4];

module.exports = accountsData;
