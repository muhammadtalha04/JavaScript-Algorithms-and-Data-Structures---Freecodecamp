/*
  This example was about making a variable private so that it is not accessible outside the constructor. This is called closeure.
*/

function Bird() {
  let weight = 15;

  this.getWeight = function() {
    return weight;
  }
}