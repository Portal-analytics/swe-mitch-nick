var prompt = require("prompt");

prompt.start();

makeCall(true, 0);
function makeCall(isTrue, prime) {
  prompt.get(
    [
      {
        name: "goNext",
        type: "boolean",
        required: true
      }
    ],
    function(err, result) {
      console.log(result.goNext);
      let foundPrime = false;
      prime = prime + 1;
      while (foundPrime == false) {
        if (
          (prime % 2 == 0 && prime != 2) ||
          (prime % 3 == 0 && prime != 3) ||
          (prime % 5 == 0 && prime != 5) ||
          (prime % 7 == 0 && prime != 7)
        ) {
          foundPrime == false;
          prime = prime + 1;
        } else {
          foundPrime = true;
        }
      }

      if (result.goNext == true) {
        console.log(prime);
        makeCall(result.goNext, prime);
      } else {
        console.log("Done!");
      }
    }
  );
}
