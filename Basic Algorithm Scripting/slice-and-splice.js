/*
  In this example we were to create a third array and copy arr2's elements till nth index and then copy all the elements of arr1 into it and after that copy the remaining elements of arr2 in it.
*/

function frankenSplice(arr1, arr2, n) {
  let arr3 = [...arr2];
  arr3.splice(n, -1, ...arr1);
  return arr3;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);