/*
  This example was about creating a range of numbers using recursion. 
*/

function rangeOfNumbers(startNum, endNum) {
  if (startNum >= endNum) {
    return [endNum];
  } else {
    const arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    return arr;
  }
};