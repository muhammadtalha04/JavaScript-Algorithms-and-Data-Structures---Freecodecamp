/*
  In this example I learnt about the difference between "let" and "var". I also learnt about the usage of "use strict" in the code.
*/

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
