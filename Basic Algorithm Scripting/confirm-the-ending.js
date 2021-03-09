/*
  In this example we were to check if the given string ends with the target string or not. For this we were to use subtring methods instead of using endsWith method.
*/

function confirmEnding(str, target) {
  let ending = str.substring(str.length - target.length, str.length);

  return (ending == target) ? true : false;
}

confirmEnding("Bastian", "ant");