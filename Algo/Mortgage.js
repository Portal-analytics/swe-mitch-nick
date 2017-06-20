var prompt = require("prompt");

//
// Start the prompt
//
prompt.start();

//Payment formula
//P=Loan[(monthly Interest Rate (C))(1+C)^n]/[1+c]^n-1]

prompt.get(["Total", "Periods", "Rate"], function(err, result) {
  n = result.Periods;
  c = result.Rate / 100 / n;
  l = result.Total;

  //p = l * (c * Math.pow(1 + c, n)) / (Math.pow(1 + c, n) - 1);
  p = l * (c * Math.pow(1 + c, n)) / (Math.pow(1 + c, n) - 1);

  console.log("Total Monthly Payments: $" + p);
});
