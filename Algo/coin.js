var prompt = require("prompt");

//
// Start the prompt
//
prompt.start();

prompt.get(["flips"], function(err, result) {
  var heads = 0;
  for (i = 0; i < result.flips; i++) {
    if (Math.random() < 0.5) {
      heads = heads + 1;
    }
  }

  console.log("There was " + heads + " heads flips");
  console.log("Heads: %" + heads / result.flips);
  console.log("Tails: %" + (result.flips - heads) / result.flips);
});
