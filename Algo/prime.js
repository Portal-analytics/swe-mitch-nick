var prompt = require("prompt");

//
// Start the prompt
//
prompt.start();

makeCall(true, 0);
function makeCall(isTrue, prime) {
  prompt.get(
    [
      {
        name: "goNext (true or false)",
        type: "boolean",
        required: true
      }
    ],
    function(err, result) {
      if (result.goNext == true) {
        console.log("worked");
        makeCall(result.goNext, 5);
      } else {
        console.log("Done!");
      }
    }
  );
}
