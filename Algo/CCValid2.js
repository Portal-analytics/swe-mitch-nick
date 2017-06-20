var prompt = require("prompt");

//
// Start the prompt
prompt.start();

prompt.get(["ccNumber"], function(err, result) {
  let myCC = result.ccNumber;
  let myCCArray = [];
  //Convert given CC number into an array for easier manipulation
  //Reverse the digits
  while (myCC > 0.999) {
    myCCArray = myCCArray.concat(myCC % 10);
    myCC = Math.floor(myCC / 10);
  }
  console.log(myCCArray);

  //Sum the Odd Digits
  let endIndex = myCCArray.length;
  let s1 = 0;
  for (i = 0; i < endIndex; i += 2) {
    s1 = s1 + myCCArray[i];
  }
  console.log(s1);

  //Manipulate the Even Digits
  let s2 = 0;
  for (i = 1; i < endIndex; i += 2) {
    myCCArray[i] *= 2;

    if (myCCArray[i] >= 10) {
      myCCArray[i] -= 9;
    }
    s2 = s2 + myCCArray[i];
  }
  console.log(s2);

  if ((s1 + s2) % 10 == 0) {
    console.log("Good Number!");
  } else {
    console.log("Bad Number");
  }
});
