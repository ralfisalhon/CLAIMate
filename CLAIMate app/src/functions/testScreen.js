var output = require('./output.js');

data = {
  customerName: "Sean Chok",
  phoneNumber: "+852 99999999",
  email: "email@gmail.com",
  companyName: "Bad Company",
  category: "Airlines",
  itemType: "services",
  description: "They are just so stupid.",
  grounds: "Defective ticket / overbooking",
  transactionDate: "24 Feb 2019",
  claimAmount: 3200,
  customerLocation: "Hong Kong",
  companyLocation: "Hong Kong"
}

var text = output.createDemandLetter(data);
console.log(text);
