const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);

// returns the system uptime in seconds
console.log(`The system uptime is ${os.uptime() / (60 * 60)} hours`);

// some interesting system's info
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
