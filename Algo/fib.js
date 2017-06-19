var prompt = require("prompt");

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
// prompt.get(["NumOfDigits"], function(err, result) {
//   //
//   // Log the results.
//   var nums = [1, 1];
//   for (i = 2; i < result.NumOfDigits; i++) {
//     nums[i] = nums[i - 1] + nums[i - 2];
//   }
//   console.log(nums);
//   //
// });

isGoing=true;
while(isGoing==true)
{
prompt.get(["Next"],function(err,result)
    isGoing=result.Next;
