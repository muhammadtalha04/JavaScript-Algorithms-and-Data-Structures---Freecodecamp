/*
  In this example we were to find the lowest index to which the given number "num" can be inserted.
*/

function getIndexToIns(arr, num) {
  let ind = 0;

  for (let i=0; i<arr.length; i++) {
    if (num > arr[i]) {
      ind++;
    }
  }

  return ind;
}

getIndexToIns([40, 60], 50);