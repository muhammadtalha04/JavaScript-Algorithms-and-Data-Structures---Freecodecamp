/*
  This example was about concatenating arrays using the spread operator.
*/

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

console.log(spreadOut());