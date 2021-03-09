/*
  This example was about searching an element in an array using indexOf method.
*/

function quickCheck(arr, elem) {
  // Only change code below this line
  return (arr.indexOf(elem) >= 0) ? true : false;
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));