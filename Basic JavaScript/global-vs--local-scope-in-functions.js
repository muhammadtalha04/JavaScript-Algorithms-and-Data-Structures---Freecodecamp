/*
  In this example I learnt more about local and global variables. Local variable has more preference than global variable if they have the same name.
*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();