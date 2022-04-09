//set up different game modes

var pendingUsername =
  "Pending username";
var playingSPS = "Playing SPS";
var playingCoinFlip =
  "Playing Coin Flip";
var playingReverse = "Playing Reverse";
var mainMenu = "main menu";
var myOutputValue =
  "Hello there, would you like to play a game with llomie? </br> if you would like to play, please input your username.";
var gameMode = pendingUsername;
var username = "";
var headsCount = 0;
var flips = 0;
var totalRounds = 0;
var llomieWins = 0;
var totalTies = 0;
var llomieWinRate = 0;
var MJPlastWinner = 0;

//input validation - to check if it is sps
var invalid =
  "Llomie doesn't understand. Please type either scissors \u2702\uFE0F, paper \uD83D\uDD90 or stone \uD83D\uDDFF.";
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
    let randomDecimal =
      Math.random() * 3 + 1;
    let randomInteger = Math.floor(
      randomDecimal
    );
    //console.log(randomInteger);
    var rngSPS = "stone";

    if (randomInteger === 1) {
      rngSPS = "scissors";
    } else if (randomInteger === 2) {
      rngSPS = "paper";
    }
  }

  return rngSPS;
};

//function to check who wins, given the 2 inputs
var spsLogic = function (rng, player) {
  totalRounds += 1;
  llomieWinRate =
    (llomieWins / totalRounds) * 100 +
    "%";
  let win =
    "Llomie has let you win for this round :) </br> </br> Llomie win rate so far: ";
  let lose =
    "You Lose... Llomie is very good at Scissors paper stone, so don't be too disappointed </br> </br> Llomie win rate so far: ";
  //Start with a tie
  var result =
    "It's a tie!!</br> </br> Llomie win rate so far: " +
    llomieWinRate;
  if (rng === player) {
    totalTies += 1;
    MJPlastWinner = "";
    return result;
  }
  //input all win cases
  else if (
    (rng === "scissors" &&
      player === "stone") ||
    (rng === "paper" &&
      player === "scissors") ||
    (rng === "stone" &&
      player === "paper")
  ) {
    llomieWinRate =
      (llomieWins / totalRounds) * 100 +
      "%";
    MJPlastWinner = username;
    result = win + llomieWinRate;
  } else {
    llomieWins += 1;
    llomieWinRate =
      (llomieWins / totalRounds) * 100 +
      "%";
    result = lose + llomieWinRate;
    MJPlastWinner = "llomie";
  }

  return result;
};

//emoji generator :)
var spsEmoji = function (input) {
  let output = "stone \uD83D\uDDFF";
  if (input === "scissors") {
    output = input + " \u2702\uFE0F";
  } else if (input === "paper") {
    output = input + " \uD83D\uDD90";
  }
  return output;
};

var spsOutput = function (
  input,
  rngSPS
) {
  let myoutput =
    "You played " +
    spsEmoji(input) +
    "</br/> And Llomie \uD83E\uDD99 played " +
    spsEmoji(rngSPS) +
    "</br/>" +
    spsLogic(rngSPS, input);
  return myoutput;
};

//reversemode
var spsReverse = function (
  input,
  rngSPS
) {
  let myoutput =
    "You played " +
    spsEmoji(input) +
    "</br/> And Llomie \uD83E\uDD99 played " +
    spsEmoji(rngSPS) +
    "</br/>" +
    spsLogic(input, rngSPS);
  return myoutput;
};

var coinFlipper = function (input) {
  let randomInteger = Math.floor(
    Math.random() * 2
  );
  let coinFlipResult = "";

  if (randomInteger) {
    headsCount += 1;
    flips += 1;
    coinFlipResult =
      "Llomie has flipped heads. </br> Go for it, the gummies in the fridge are calling for you... \uD83E\uDDF8 </br></br> Tally so far: </br>" +
      flips +
      " coins flipped</br>" +
      headsCount +
      " gummies eaten \uD83E\uDDF8";
  } else {
    flips += 1;
    coinFlipResult =
      "The coin lands dramatically on tails. </br> No sour gummy this time</br></br> Tally so far: </br>" +
      flips +
      " coins flipped</br>" +
      headsCount +
      " gummies eaten \uD83E\uDDF8";
  }
  return coinFlipResult;
};

var main = function (input) {
  // set up username
  var myOutputValue = "";
  if (gameMode === pendingUsername) {
    username = input;
    gameMode = mainMenu;
    myOutputValue =
      "Hello " +
      username +
      ", what would you like to play today? </br> you can choose between the following options: </br> </br> 'SPS'- a classic game of scissors,paper,stone with Llomie </br> 'coin' - Llomie will flip a coin for you </br> 'reverse' - Play SPS in reverse";
  }
  //main menu options
  else if (gameMode === mainMenu) {
    if (input === "SPS") {
      //initiate SPS
      gameMode = playingSPS;
      myOutputValue =
        username +
        " ,you are now playing scissors, paper, stone against Llomie";
    } else if (input === "coin") {
      //coin flip game
      gameMode = playingCoinFlip;
      myOutputValue =
        "Llomie will now flip a coin for you, " +
        username;
    } else if (input === "reverse") {
      gameMode = playingReverse;
      myOutputValue =
        " you are now playing scissors,paper,stone in reverse";
    } else {
      myOutputValue =
        "Sorry, " +
        username +
        " Llomie didn't understand your input :(, please choose either 'SPS' or  'coin'";
    }
  } else if (gameMode === playingSPS) {
    var rngSPS = spsGenerator();
    console.log(rngSPS);
    console.log(
      "RNG Llomie plays " +
        spsEmoji(rngSPS)
    );
    if (inputChecking(input)) {
      return invalid;
    } else
      var myOutputValue = spsOutput(
        input,
        rngSPS
      );
  } else if (
    gameMode === playingCoinFlip
  ) {
    myOutputValue = coinFlipper();
  } else if (
    gameMode === playingReverse
  ) {
    var rngSPS = spsGenerator();
    console.log(rngSPS);
    console.log(
      "RNG Llomie plays " +
        spsEmoji(rngSPS)
    );
    if (inputChecking(input)) {
      return invalid;
    } else
      var myOutputValue = spsReverse(
        input,
        rngSPS
      );
  }

  return myOutputValue;
};
