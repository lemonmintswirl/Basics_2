// global scope
var globalVariable = 0;

// also global scope
var introScopeMain = function (input) {
  // function scope
  console.log(`globalVariable has a value of ${globalVariable}`);
  // we can manipulate the value of a global varaible
  // without having to re-declare using the var keyword:
  globalVariable += 1;
  console.log(`globalVariable now has a value of ${globalVariable}`);
  var myOutputValue;
  if (globalVariable % 2 == 0) {
    // block scope
    // we can access both myOutputValue and globalVariable within block scope
    let llomie = "llomie is very good";
    console.log(llomie);

    myOutputValue = `Global variable is even, with a value of ${globalVariable}`;
  } else {
    console.log(llomie);
    myOutputValue = `Global variable is odd, with a value of ${globalVariable}`;
  }
  return myOutputValue;
};
var previousDice = "";
var totalRolls = 0;
var totalWins = 0;
var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  console.log("llomie rolled a " + diceNumber);

  return diceNumber;
};

var appSetupMain = function (input) {
  // Attempt the Base: App Setup exercise from the Program Lifecycle and State module below with appSetupMain as the main function.
  var randomDiceNumber = rollDice();
  totalRolls += 1;

  var myOutputValue =
    "You guessed " +
    input +
    "but llomie he rolled a " +
    randomDiceNumber +
    ", so you lose. But, llomie he wins :) </br> By the way, last round, llomie rolled " +
    previousDice;

  if (randomDiceNumber == input) {
    totalRolls += 1;
    totalWins += 1;
    myOutputValue =
      "You guessed" +
      input +
      "and llomie he rolled a " +
      randomDiceNumber +
      ", so you win. Llomie he lets you win :) </br> By the way, last round, llomie rolled " +
      previousDice;
  }
  var winRate = (totalWins / totalRolls) * 100;
  previousDice = randomDiceNumber;
  return myOutputValue + "</br> </br> Your win rate is " + winRate + "%";
};

var lastRollMain = function (input) {
  // Attempt the Base: Last Roll exercise from the Program Lifecycle and State module below with lastRollMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var winLossMain = function (input) {
  // Attempt the Base: Win / Loss exercise from the Program Lifecycle and State module below with winLossMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var mostRolledMain = function (input) {
  // Attempt the More Comfortable: Most Rolled exercise from the Program Lifecycle and State module below with mostRolledMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var guessingMain = function (input) {
  // Attempt the More Comfortable: Guessing exercise from the Program Lifecycle and State module below with guessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var advancedGuessingMain = function (input) {
  // Attempt the More Comfortable: Advanced Guessing exercise from the Program Lifecycle and State module below with advancedGuessingMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//''''' GAME STATE EXAMPLE''''''''
// we set the initial state of mode
var mode = "green";

// depending on the input, we will toggle mode states between green/blue
var followAlongMain = function (input) {
  if (input == "greenmode") {
    mode = "green";
  } else if (input == "bluemode") {
    mode = "blue";
  }

  var myOutputValue =
    "A fool sees not the same tree that a wise man sees. -William Blake";

  // reassign the value of myOutputValue is mode is at state 'blue'
  if (mode == "blue") {
    myOutputValue =
      "The sea, once it casts its spell, holds one in its net of wonder forever. -Jacques Cousteau";
  }

  return myOutputValue;
};

//'''''RED MODE EXAMPLE'
// Set the initial game states
var waitingUsername = "waiting for user name";
var playingDiceGame = "dice game";

var currentGameMode = waitingUsername;
var bankRoll = 10;
var userName = "";

// Get a randomised dice roll
var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

/**
  For a program with only one input field, the program must be 'smart'
  enough to understand the context of the inputs based on the prevailing
  game states.
**/
var redModeMain = function (input) {
  var myOutputValue = "";

  if (currentGameMode == waitingUsername) {
    // set the name
    userName = input;

    // now that we have the name, switch the mode
    currentGameMode = playingDiceGame;

    myOutputValue = "Hello " + userName;
  } else if (currentGameMode == playingDiceGame) {
    // dice game logic
    var randomDiceRoll = rollDice();
    myOutputValue =
      userName +
      " you lost! you guessed: " +
      input +
      "you rolled: " +
      randomDiceRoll +
      " current bank roll: " +
      bankRoll;

    if (userGuess == randomDiceRoll) {
      bankRoll = bankRoll + 1;
      myOutputValue =
        userName +
        " you won! you guessed: " +
        input +
        "you rolled: " +
        randomDiceRoll +
        " your current bank roll: " +
        bankRoll;
    }
  }

  return myOutputValue;
};
