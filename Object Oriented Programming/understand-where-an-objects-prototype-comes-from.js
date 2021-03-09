/*
  This example was about showing the relationship between the object and the constructor it was inherited from.
*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle);