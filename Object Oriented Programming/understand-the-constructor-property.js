/*
  This example gave a better undersatnding of constructor property and how we can use it as an alternative to instanceof method.
*/

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor == Dog) {
    return true;
  } else {
    return false;
  }
}
