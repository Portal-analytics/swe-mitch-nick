var prompt = require("prompt");

//
// Start the prompt
prompt.start();

prompt.get(["ccNumber"], function(err, result) {
  var myCC = result.ccNumber;
  var myCCArray = [];
  //Convert given CC number into an array for easier manipulation
  while (myCC > 0.999) {
    myCCArray = [myCC % 10] + myCCArray;
    myCC = Math.floor(myCC / 10);
  }

  var checkValIndex = myCCArray.length;

  //Perform the Luhn Algorithm

  //Double every other digit
  //Subtract 9 if the digit is =<10
  console.log(myCCArray);

  for (i = checkValIndex - 1; i > 0; i -= 2) {
    myCCArray[i] = [myCCArray[i] * 2];
    if (myCCArray[i] >= 10) {
      myCCArray[i] = myCCArray[i] - 9;
    }
  }

  var cardSum = 0;
  for (i = 0; i < checkValIndex; i++) {
    cardSum = myCCArray[i];
  }

  checkDigit = cardSum * 9 % 10;

  if ((checkDigit = myCCArray[checkValIndex])) {
    console.log("Good Number");
  } else {
    console.log("Bad number");
  }
  //
  console.log(myCCArray);
});
