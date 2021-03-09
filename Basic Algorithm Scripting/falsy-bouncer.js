/*
  In this example we were to remove all the falsy values from the given array.
*/

function bouncer(arr) {
  let len = arr.length;
  let newArr = [];

  for (let i=0; i<len; i++) {
    if (Boolean(arr[i]) == true) {
      newArr.push(arr[i]);
    }   
  }

  return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));