/*
  This example was about preventing infinite loop by providing a valid termination condition.
*/

function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}