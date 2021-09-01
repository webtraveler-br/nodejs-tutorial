const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile("./content/test-promise.txt", "it works!", { flag: "a" });
    console.log(`${first}\n ${second}`);
  } catch (error) {
    console.log(error);
  }
};

start();

/* Using util to make a promise function

const { promisify } = require("util");

const readFilePromisse = promisify(readFile);
const writeFilePromisse = promisify(writeFile);
 */

/* Making our own promise function

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
getText("./content/first.txt")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
 */
