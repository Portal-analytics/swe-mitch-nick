var prompt = require("prompt");

//
// Start the prompt
//
prompt.start();

prompt.get(["cost", "tax"], function(err, result) {
  result.tax = result.tax / 100;
  console.log("$: " + result.cost * (1 + result.tax));
});
