/*
  If a variable has a static value for each instance of an object then it will consume a lot of memory. A better way is to use prototype properties. In this way that static value will be shared among all the instances of that object.
*/

function Dog(name) {
  this.name = name;
  Dog.prototype.numLegs = 4; 
}



// Only change code above this line
let beagle = new Dog("Snoopy");