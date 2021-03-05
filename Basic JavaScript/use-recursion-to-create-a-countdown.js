/*
  This example was about writing a recursion to make a countdown.
*/

// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}
// Only change code above this line