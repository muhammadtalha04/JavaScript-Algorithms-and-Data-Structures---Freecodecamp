/*
  This example was about making an algorithm to find the longest word in a string.
*/

function findLongestWordLength(str) {
  let words = str.split(" ");
  let len = 0;

  for (let i=0; i<words.length; i++) {
    if (words[i].length > len) {
      len = words[i].length;
    }
  }

  return len;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");