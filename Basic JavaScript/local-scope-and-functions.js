/*
  In this example I learnt about local scope of a variable.
*/

function myLocalScope() {

  // Only change code below this line
  var myVar = "12";

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);