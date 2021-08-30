const { readFileSync, writeFileSync } = require("fs");

// reading file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(`${first} \n${second}`);

// writing a file
writeFileSync(
  "./content/result.txt",
  `\nHere is the result: \n - ${first} \n - ${second}`,
  // without this flag node would just overwrite the file, a stands for append
  { flag: "a" }
);
