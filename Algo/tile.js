var prompt = require("prompt");

var prompt = require("prompt");

//
// Start the prompt
//
prompt.start();

prompt.get(["Width", "Height", "Cost"], function(err, result) {
  totalCost = result.Width * result.Height * result.Cost;
  console.log("Cost: $ " + totalCost);
});
