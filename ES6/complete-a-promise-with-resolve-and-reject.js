/*
  This example was about implementing "Promise" which we learnt in the previous example.
*/

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;
    
  if(responseFromServer) {
    resolve("We got the data");    // Change this line
  } else {  
    reject("Data not received");   // Change this line
  }
});