/*
  In this example I learnt about the "hasOwnProperty" function to check if the specific property exists in the object or not.
*/

function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp) == true) {
    return obj[checkProp];
  }
  return "Not Found";
  // Only change code above this line
}