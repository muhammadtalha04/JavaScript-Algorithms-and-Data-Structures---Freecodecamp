/*
  In this example we were to truncate a string if it exceeds a given length.
*/

function truncateString(str, num) {
  return (num < str.length) ? str.substring(0, num)+"..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);