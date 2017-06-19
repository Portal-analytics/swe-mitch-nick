var prompt = require("prompt");

//
// Start the prompt
//
prompt.start();

prompt.get(["NumOfDigits"], function(err, result) {
  //
  // Log the results.
  var nums = [1, 1];
  for (i = 2; i < result.NumOfDigits; i++) {
    nums[i] = nums[i - 1] + nums[i - 2];
  }
  console.log(nums);
  //
});
