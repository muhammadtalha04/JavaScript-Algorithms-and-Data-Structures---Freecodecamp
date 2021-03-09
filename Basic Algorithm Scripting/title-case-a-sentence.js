/*
  In this example we were to capitalize the first letter of each word.
*/

function titleCase(str) {
  let words = str.toLowerCase().split(" ");
  let capitalized = "";

  for (let i=0; i<words.length; i++) {
    let char = words[i][0].charCodeAt(0);
    
    if (char >= 97 && char <= 122) {
      char -= 32;
    } 

    words[i] = String.fromCharCode(char) + words[i].substring(1);
    capitalized += words[i];

    if (i < words.length - 1) {
      capitalized += " ";
    }
  }

  return capitalized;
}

titleCase("I'm a little tea pot");