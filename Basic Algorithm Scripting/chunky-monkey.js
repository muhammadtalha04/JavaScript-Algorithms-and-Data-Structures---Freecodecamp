/*
  In this example we were to create sub-arrays of length "size" of the given array.
*/

function chunkArrayInGroups(arr, size) {
  const newArr = [];
  while (arr.length > 0) {
    const tempArr = [];
    for (let j=0; j<size; j++) {
      if(arr.length != 0) {
        tempArr.push(arr.shift());
      }
    }
    newArr.push(tempArr);
  }

  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);