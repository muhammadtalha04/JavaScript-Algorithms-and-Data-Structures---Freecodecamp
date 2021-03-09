/*
  This example was about the mixins. Mixins are used when two unrelated objects have common methods e.g Airplane and Bird both can fly.
*/

let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj) {
  obj.glide = function() {
    console.log("Gliding!");
  }
}

glideMixin(bird);
glideMixin(boat);