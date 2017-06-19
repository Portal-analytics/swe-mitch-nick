var prompt = require("prompt");

prompt.start();
console.log("Give me a number and I'll give you the prime factors:");
prompt.get(["number"], function(err, result) {
  var factors = [];
  var dummy_number = result.number;
  var prime_checker = [];
  for (var i = 2; i <= result.number; i++) {
    if (dummy_number % i == 0) {
      prime_checker = [];
      for (var j = 2; j <= i; j++) {
        if (i % j == 0) {
          prime_checker.push(j);
        }
      }
      if (prime_checker.length < 2) {
        factors.concat(i);
        dummy_number = dummy_number / i;
        console.log(i);
      }
    }
  }
});
