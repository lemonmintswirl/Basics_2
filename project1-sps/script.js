//input validation - to check if it is sps
var invalid =
  "Invalid input. Please type either scissors \u2702\uFE0F, paper \uD83D\uDD90 or stone \uD83E\uDEA8.";
var inputChecking = function (input) {
  if (
    input != "scissors" &&
    input != "paper" &&
    input != "stone"
  ) {
    return true;
  } else {
    return false;
  }
};

//computer SPS generator
var spsGenerator = function (
  trigger = false
) {
  if (trigger) {
    return "scissors";
  } else {
    var randomDecimal =
      Math.random() * 3 + 1;
    var randomInteger = Math.floor(
      randomDecimal
    );
  }
  //console.log(randomInteger);
  var rngSPS = "Stone";

  if (randomInteger == 1) {
    rngSPS = "Scissors";
  } else if (randomInteger == 2) {
    rngSPS = "Paper";
  } else {
  }
  return rngSPS;
};

//function to check who wins, given the 2 inputs
var spsLogic = function (rng, player) {
  //Start with a tie
  var result = "It's a tie!!";
  if (rng == player) {
    return result;
  }
  //input all win cases
  else if (
    rng == "scissors" &&
    player == "stone"
  ) {
    result = "You Win!";
  } else if (
    rng == "paper" &&
    player == "scissors"
  ) {
    result = "You Win!";
  } else if (
    rng == "stone" &&
    player == "paper"
  ) {
    result = "You Win!";
  } else {
    result = "You Lose :(";
  }

  return result;
};

//emoji generator :)
var spsEmoji = function (input) {
  var output = "Stone \uD83E\uDEA8";
  if (input == "Scissors") {
    output = input + " \u2702\uFE0F";
  } else if (input == "Paper") {
    output = input + " \uD83D\uDD90";
  }
  return output;
};

var main = function (input) {
  var rngSPS = spsGenerator();
  //console.log(rngSPS);
  console.log(
    "The compuer plays " +
      spsEmoji(rngSPS)
  );
  if (inputChecking(input)) {
    return invalid;
  } else
    var myOutputValue =
      "You played " +
      spsEmoji(input) +
      "</br/> And Llomie \uD83E\uDD99 played " +
      spsEmoji(rngSPS) +
      "</br/>" +
      spsLogic(rngSPS, input);
  return myOutputValue;
};
