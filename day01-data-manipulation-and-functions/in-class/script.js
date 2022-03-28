var fToC = function (farenheit) {
  var celcius =
    ((farenheit - 32) * 5) / 9;
  return celcius;
};

var fahrenheitToCelsiusMain = function (
  input
) {
  // Complete the Base: Fahrenheit to Celsius exercise below with fahrenheitToCelsiusMain as the main function.
  var celsius = fToC(input);
  return celsius;
};

//convert km to miles
var kmToMiles = function (totalKM) {
  var totalMiles = totalKM * 0.62;
  return totalMiles;
};

//return total trip cost
var calculateFuelCost = function (
  totalMiles
) {
  var milesPerLitre = 9;
  var costPerLitre = 2.2;
  fuelCost =
    (totalMiles / milesPerLitre) *
    costPerLitre;
  return fuelCost;
};

var roadTripCostBaseMain = function (
  input
) {
  var myOutputValue = calculateFuelCost(
    kmtoMiles(input)
  );
  return myOutputValue;
};

//fuel cost for train
var calculateFuelCostTrain = function (
  totalMiles,
  costPerLitreTrain
) {
  var milesPerLitre = 9;
  fuelCostTrain =
    (totalMiles / milesPerLitre) *
    costPerLitreTrain;
  return fuelCostTrain;
};

var roadTripCostComfortableMain = function (
  input
) {
  // Fuel cost with car minus fuel cost with train
  var myOutputValue =
    calculateFuelCost(
      kmToMiles(input)
    ) -
    calculateFuelCostTrain(
      kmToMiles(input),
      2
    );
  return myOutputValue;
};

//calculate the ice needed per guest in grams
var guestToIcePounds = function (
  guests
) {
  var drinksPerGuest = 2;
  var icePerDrink = 4;
  var gramsPerIce = 1.5;
  var poundsperG = 1 / 453.6;
  var PoundsOfIce =
    guests *
    drinksPerGuest *
    icePerDrink *
    gramsPerIce *
    poundsperG;
  console.log(
    PoundsOfIce / guests +
      " Pounds of ice per Guest"
  );
  return PoundsOfIce;
};
//Calculate time needed per gram of ice
var hoursCalculation = function (
  guests
) {
  var poundsPerHr = 5;
  var hoursNeeded =
    guestToIcePounds(guests) /
    poundsPerHr;
  return hoursNeeded;
};

var iceMachineMain = function (input) {
  // Complete the More Comfortable: Ice Machine exercise below with iceMachineMain as the main function.
  var myOutputValue = hoursCalculation(
    input
  );
  return myOutputValue;
};

//// CALCULATING KEGS OF BEER //////
//calculate the number of kegs per customer

//calculate the number of kegs based on the number of customers

var beerOrderMain = function (input) {
  // Complete the More Comfortable: Beer Order exercise below with beerOrderMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

//////DATA CALCULATION/////

//Calculate number of plans
//Calculate cost per GB
var costPerGB = function (gbUsed) {
  var planPrice = 19.99;
  var planGB = 50;
  var numberOfPlans = Math.ceil(
    gbUsed / planGB
  );
  console.log(
    numberOfPlans + " plan(s) used"
  );
  var dollarsPerGB =
    (planPrice * numberOfPlans) /
    gbUsed;
  return dollarsPerGB;
};

var cellularDataMain = function (
  input
) {
  // Complete the More Comfortable: Cost of Cellular Data exercise below with cellularDataMain as the main function.
  var myOutputValue = costPerGB(input);
  return myOutputValue;
};
