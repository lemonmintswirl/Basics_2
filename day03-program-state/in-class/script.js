// SECRET WORD GUESSING//

//Set up the RNG for the 3 words - separate function
var randomNumberGenerator = function (rigged = false) {
  if (rigged) return 3;
  else {
    var randomDecimal = Math.random() * 3;
    var randomInteger = Math.floor(randomDecimal) + 1;
  }
  return randomInteger;
};

var randomWord = function () {
  var word = "";
  var randomNumber = randomNumberGenerator();
  if (randomNumber == 1) {
    word = "cat";
  } else if (randomNumber == 2) {
    word = "dog";
  } else {
    word = "pig";
  }
  return word;
};

//the counter to count how many times you win
var winCounter = 0;
//if loop to decide whether you win or not

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var thisRoundWord = randomWord();
  var moreWinsNeeded = 2 - winCounter;
  var myOutputValue = "";
  //if you win but havent win twice
  if (input == thisRoundWord && winCounter < 1) {
    winCounter += 1;
    moreWinsNeeded = 2 - winCounter;

    myOutputValue =
      "The word is " +
      thisRoundWord +
      " and you guessed correctly, so you win </br> But you still need to win this many more rounds " +
      moreWinsNeeded;
  }
  // if you win twice already
  else if (input == thisRoundWord && winCounter == 1) {
    myOutputValue =
      "The word is " +
      thisRoundWord +
      " and you guessed correctly, so you win </br> You have won the game";
  }
  // if you lose & how many times u win alr
  else {
    moreWinsNeeded = 2 - winCounter;
    myOutputValue =
      "The word is " +
      thisRoundWord +
      " and you guessed " +
      input +
      " so you lose </br> You need to win this many more rounds " +
      moreWinsNeeded;
  }

  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var thisRoundWord = randomWord();
  var moreWinsNeeded = 2 - winCounter;

  //if you win but havent win twice
  if (input == thisRoundWord && winCounter < 1) {
    winCounter += 1;

    myOutputValue =
      "The word is " +
      thisRoundWord +
      " and you guessed correctly, so you win </br> But you still need to win one more time";
  }
  // if you win twice already
  else if (input == thisRoundWord && winCounter == 1) {
    myOutputValue =
      "The word is " +
      thisRoundWord +
      " and you guessed correctly, twice in a row so you win </br> You have won the game";
  }
  // if you lose & how many times u win alr
  else {
    winCounter = 0;
    myOutputValue =
      "The word is " +
      thisRoundWord +
      " and you guessed " +
      input +
      " so you lose </br> You need to win this many more rounds " +
      moreWinsNeeded;
  }

  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
//dice roller
var rollDice = function (rigged = false) {
  if (rigged) return 6;
  else {
    var randomDecimal = Math.random() * 6;
    var randomInteger = Math.floor(randomDecimal);
    var diceNumber = randomInteger + 1;
  }
  return diceNumber;
};

//rng for numbers 1-3 (use function above - randomNumberGenerator)

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  var currentDice = rollDice();
  var currentDice2 = rollDice();
  var currentDifficulty = randomNumberGenerator();
  console.log("current difficulty is " + currentDifficulty);
  console.log(
    "current dice roll is " +
      currentDice +
      "and the second dice is " +
      currentDice2
  );
  //if you are within - you win
  if (
    Math.abs(input - currentDice) <= currentDifficulty ||
    Math.abs(input - currentDice2) <= currentDifficulty
  ) {
    myOutputValue =
      "The dices Rolled " + currentDice + " & " + currentDice2 + ". You win";
  } else {
    myOutputValue =
      "The dices Rolled " +
      currentDice +
      " & " +
      currentDice2 +
      " </br>you lose, try again!";
  }
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
