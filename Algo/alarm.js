var prompt = require("prompt");
var player = require("play-sound")((opts = {}));

//
// Start the prompt
prompt.start();

prompt.get(["timeToAlarm"], function(err, result) {
  function setAlarm() {
    player.play("BleedingOut.mp3", function(err) {
      if (err) throw err;
    });
  }
  setTimeout(setAlarm, result.timeToAlarm * 1000);
});
