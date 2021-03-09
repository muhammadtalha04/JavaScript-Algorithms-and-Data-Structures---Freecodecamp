/*
  In this example we were to repeat a string to the given number of time times.
*/

function repeatStringNumTimes(str, num) {
  let repeatedStr = "";

  for (let i=0; i<num; i++) {
    repeatedStr += str;
  }
  
  return repeatedStr;
}

repeatStringNumTimes("abc", 3);