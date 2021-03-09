/*
  This example was about verifying if a particulat variable was created by using a constructor of an object of not.
*/

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(3);

console.log(myHouse instanceof House);
