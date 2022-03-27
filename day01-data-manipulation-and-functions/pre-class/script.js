var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};

var greetingMain = function (input) {
  // Attempt the Greeting Program exercise from the Our First Program module below with greetingMain as the main function.
  var myOutputValue =
    "hemlo " + input + " bunny says hi";
  return myOutputValue;
};

var convertKmToMiles = function (
  distanceInKm
) {
  var distanceInMiles =
    distanceInKm * 0.62;
  return distanceInMiles;
};

var metricMain = function (input) {
  // Attempt the Metric Conversion Program exercise from the Our First Program module below with metricMain as the main function.

  var myOutputValue = convertKmToMiles(
    input
  );
  return (
    "Hemlo, " +
    input +
    "KM" +
    " is equal to " +
    myOutputValue +
    " miles"
  );
};

var functionsExampleMain = function (
  input
) {
  // Attempt the Base: Run Example Code exercise from the Functions I module below with functionsExampleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var speedNeeded = function (delay) {
  var distance = 200 * 2;
  var timeAvail = 2 - delay / 60;
  var speed2 = distance / timeAvail;
  return speed2;
};

var trainSpeedMain = function (input) {
  // Attempt the Comfortable: Train Speed exercise from the Functions I module below with trainSpeedMain as the main function.
  var myOutputValue = speedNeeded(
    input
  );
  return myOutputValue;
};

var angleDiff = function (minutes) {
  var hour = 1;
  var mAngle = (360 / 60) * minutes;
  var hAngle =
    (360 / 12) * (hour + minutes / 60);
  var diff = mAngle - hAngle;
  return diff;
};

var clockMain = function (input) {
  // Attempt the More Comfortable: Clock exercise from the Functions I module below with clockMain as the main function.
  var myOutputValue = angleDiff(input);
  return myOutputValue;
};
