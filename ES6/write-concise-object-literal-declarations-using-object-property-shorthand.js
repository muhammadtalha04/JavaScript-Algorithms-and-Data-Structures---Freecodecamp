/*
  This example was about writing concise object declarations using object property shorthand. It was introduced in es6 to remove the redundancy of writing the property
*/

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return ({
    name,
    age,
    gender
  });
  // Only change code above this line
};