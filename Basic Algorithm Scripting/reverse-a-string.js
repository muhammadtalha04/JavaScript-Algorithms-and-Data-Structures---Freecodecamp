/*
  This example was about making an algorithm to reverse the given string.
*/

function reverseString(str) {
  let reversed = "";

  let i = str.length - 1;
  
  while (i >= 0) {
    reversed += str[i];
    i--;
  }

  return reversed;
}

reverseString("hello");