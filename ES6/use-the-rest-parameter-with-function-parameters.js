/*
  This example was about passing variable number of arguments to a function.
*/

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

