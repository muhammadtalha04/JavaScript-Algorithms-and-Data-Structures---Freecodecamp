/*
  This example was about writing a recursion to find the sum of first n numbers of an array.
*/

function sum(arr, n) {
  // Only change code below this line
  if (n == 0) {
    return n;
  } else {
    return arr[n-1] + sum(arr, n - 1);
  }
  // Only change code above this line
}