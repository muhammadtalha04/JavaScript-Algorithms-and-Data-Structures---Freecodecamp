/*
  In this example I learnt that array and functions stored in a const variable are still mutable.
*/

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  s.unshift(s.pop());
  console.log(s);

  // Only change code above this line
}
editInPlace();