const path = require("path");

// system's separator
console.log(path.sep);

// returns the path with the correct sep
const filePath = path.join("test", "test1", "test2.txt");
console.log(filePath);

// returns the basename
console.log(path.basename(filePath));

// returns absolute path
console.log(path.resolve(__dirname, filePath));
