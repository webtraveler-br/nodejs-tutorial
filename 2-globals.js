// Global variables (no window)

// __dirname - path to current directory
// __filename - name of this file
// require - function to use modules
// module - info about the current module
// process - info about env where the program is being executed (very useful!)

filename = __filename.split("/");
console.log(`${__dirname}/${filename[filename.length - 1]}`);
console.log("Hello!");
console.log("Hello again...");
// interval function
setInterval(() => {
  console.log("And again...");
}, 1001);
