/*
  This example was about adding more properties to an object.
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;

foods['grapes'] = 35;

const fruitName = 'strawberries';
foods[fruitName] = 27;
// Only change code above this line

console.log(foods);