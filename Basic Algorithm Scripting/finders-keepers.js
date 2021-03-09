/*
  In thies example we were to return the first number on which the given function returns true.
*/

function findElement(arr, func) {
  for (let i=0; i<arr.length; i++) {
    if (func(arr[i]) == true) {
      return arr[i];
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);