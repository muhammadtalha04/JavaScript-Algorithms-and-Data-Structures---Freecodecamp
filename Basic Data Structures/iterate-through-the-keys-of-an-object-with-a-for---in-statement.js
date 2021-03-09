/*
  This example was about using for-in loop to iterate through arrays and objects
*/

function countOnline(usersObj) {
  // Only change code below this line
  let countUsers = 0;
  for (let user in usersObj) {
    if (usersObj[user].hasOwnProperty('online') && usersObj[user].online == true) {
      countUsers++;
    }
  }
  return countUsers;
  // Only change code above this line
}