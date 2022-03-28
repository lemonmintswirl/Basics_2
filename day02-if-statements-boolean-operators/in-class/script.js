//Roll dice function
var rollDice = function (
  rigged = false
) {
  if (rigged) return 6;
  else {
    var randomDecimal =
      Math.random() * 6;
    var randomInteger = Math.floor(
      randomDecimal
    );
    var diceNumber = randomInteger + 1;
  }
  return diceNumber;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  //roll 2 dice

  var dice1 = rollDice();
  var dice2 = rollDice();
  var diceTotal = dice1 + dice2;
  console.log(
    "Dice 1 is " +
      dice1 +
      ". Dice 2 is " +
      dice2 +
      ". The total is " +
      diceTotal
  );

  //set up the output variable - default lose?
  var myOutputValue =
    "Too bad, try again :(";
  // win conditions
  // if either dice is matching to the guess
  if (
    input == dice1 ||
    input == dice2
  ) {
    myOutputValue = "You Win!";
  }
  // else if total dice roll is 11
  else if (dice1 + dice2 == 11) {
    myOutputValue =
      "You rolled an 11, so you also win! :)";
  }
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (
  input // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
) // by default, food would be other
{
  var myOutputValue =
    "this dish is neither rice or noodles";
  // sample dishes for rice
  if (
    input == "chicken rice" ||
    input == "nasi lemak" ||
    input.includes("rice")
  ) {
    myOutputValue = "rice";
  }
  // sample dishes for noodles
  else if (
    input == "hokkien mee" ||
    input == "laksa" ||
    input.includes("noodles") ||
    input.includes("mee")
  ) {
    myOutputValue = "noodles";
  }
  return myOutputValue;
};

// 4 D TIME///

var randomNumber = function (
  rigged = false
) {
  if (rigged) return 6;
  else {
    var randomDecimal =
      Math.random() * 10;
    var randomInteger = Math.floor(
      randomDecimal
    );
  }
  return randomInteger;
};

var fourDSingleDigitMain = function (
  input
) {
  number1 = randomNumber();
  number2 = randomNumber();
  number3 = randomNumber();
  number4 = randomNumber();
  console.log(
    "The winning number is " +
      number1 +
      number2 +
      number3 +
      number4
  );
  var myOutputValue =
    "Too bad, you didn't win although you had 4 chances";
  //if condition
  if (
    input == number1 ||
    input == number2 ||
    input == number3 ||
    input == number4
  ) {
    var myOutputValue = "you Win!";
  }
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.

  return myOutputValue;
};

var hawkerFoodRandomnessMain = function (
  input
) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//set up the 4D winning number, in actual number
var fourDgenerator = function (
  trigger = false
) {
  if (trigger) {
    return 8888;
  } else {
    number1 = randomNumber() * 1000;
    number2 = randomNumber() * 100;
    number3 = randomNumber() * 10;
    number4 = randomNumber();
    var fourNumbers =
      number1 +
      number2 +
      number3 +
      number4;
    return fourNumbers;
  }
};
var fourDWinningRangeMain = function (
  input
) {
  var winningNumber = fourDgenerator();
  console.log(winningNumber);
  var myOutputValue = "Too Bad...";
  //winning logic

  // if it is greater by 1000
  if (
    input - winningNumber <= 1000 &&
    input - winningNumber >= -1000
  ) {
    myOutputValue = "You Win!";
  }

  return myOutputValue;
};

var hawkerFoodOmakaseMain = function (
  input
) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
