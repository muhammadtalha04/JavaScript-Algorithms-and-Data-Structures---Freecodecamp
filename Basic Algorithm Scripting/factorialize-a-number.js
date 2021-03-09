/*
  This example was about making an algorithm to calculate the factorial of a number
*/

function factorialize(num) {
  let fact = 1;

  while (num > 1) {
    fact *= num;
    num--;
  }

  return fact;
}

factorialize(5);