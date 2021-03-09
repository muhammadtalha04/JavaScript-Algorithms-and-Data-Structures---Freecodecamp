/*
  This example was about getting all the keys of an obeject inn the form of an array.
*/

let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(users);
  // Only change code above this line
}

console.log(getArrayOfUsers(users));