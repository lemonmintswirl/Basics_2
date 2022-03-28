var orangeJuiceMain = function (input) {
  // Attempt the Orange Juice Calculator exercise from the Functions II module below with orangeJuiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var paintMain = function (input) {
  // Attempt the House Paint exercise from the Functions II module below with paintMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

////DICE ROLL TIME////
var rollDice = function () {
  // Generate a decimal from 0 through 6, inclusive of 0 and exclusive of 6.
  var randomDecimal = Math.random() * 6;

  // Remove the decimal with the floor operation.
  // This will be an integer from 0 to 5 inclusive.
  var randomInteger = Math.floor(
    randomDecimal
  );

  // Add 1 to get valid dice rolls of 1 through 6 inclusive.
  var diceNumber = randomInteger + 1;

  return diceNumber;
};
var randomDiceMain = function (input) {
  // Attempt the Random Dice Rolls exercise from the Intro to Logic and Control Flow module below with randomDiceMain as the main function.
  var randomDiceNumber = rollDice();

  var myOutputValue =
    "You just rolled a " +
    randomDiceNumber +
    "!";
  return myOutputValue;
};

////SECRET PHRASE////
var secretPhraseMain = function (
  input
) {
  // Attempt the Secret Phrase exercise from the If, Else, Else If module below with secretPhraseMain as the main function.
  // Set a default value for myOutputValue
  // Set a default value for myOutputValue
  var myOutputValue =
    "the door shall not open.";
  // If input is our secret phrase, change the value of myOutputValue
  if (input == "palatable papaya") {
    myOutputValue =
      "you wrote the secret phrase!";
  } else if (
    input == "not so palatable papaya"
  ) {
    myOutputValue +=
      " but you are nearly there.";
  } else {
    myOutputValue +=
      " nope, this is far from the right phrase.";
  }

  // return myOutputValue as output
  return myOutputValue;
};

var diceGameMain = function (input) {
  // Attempt the Dice Game exercise from the If, Else, Else If module below with diceGameMain as the main function.
  var myOutputValue = "Try Again";
  if (input == rollDice()) {
    myOutputValue = "You Win!";
  }
  return myOutputValue;
};

var twiceGuessMain = function (input) {
  // Attempt the Twice the Guess exercise from the If, Else, Else If module below with twiceGuessMain as the main function.
  var currentDice = rollDice();
  console.log(currentDice);
  var myOutputValue = "Try again";
  if (input * 2 == currentDice) {
    myOutputValue =
      "You Win. Congrats!!";
  } else
    myOutputValue =
      "The dice roll needs to be twice of your guess. " +
      myOutputValue;
  return myOutputValue;
};
