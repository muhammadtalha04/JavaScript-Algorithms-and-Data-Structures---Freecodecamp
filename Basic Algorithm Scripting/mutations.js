/*
  In this example we were to check if string at index 0 has all the characters of string at index 1 in it or not. 
*/

function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();

  for (let i=0; i< arr[1].length; i++) {
    if (arr[0].includes(arr[1][i]) == false) {
      return false;
    }
  }

  return true;
}

mutation(["hello", "heLLo"]);