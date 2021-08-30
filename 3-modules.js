// every file is a module (python alike)
// module = encapsulated code

const names = require("./3.1-names");
const sayHi = require("./3.2-utils");
const moreOfNothing = require("./3.3-alternative");

sayHi("Jeff");
sayHi(names.lucas); // don't forget to state the module
sayHi(names.prestes);

console.log(moreOfNothing);
require("./3.4-autoexec"); // it calls the function, wonderful
