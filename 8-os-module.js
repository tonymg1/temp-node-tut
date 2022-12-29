const os = require('os')

//info about current user
const user = os.userInfo()
// console.log(user);

//method returns uptime in seconds
// console.log(`The Systems Uptime is ${os.uptime}`);

currrentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem : os.freemem()
}
console.log(currrentOS);