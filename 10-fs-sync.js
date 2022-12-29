const {readFileSync, writeFileSync} = require('fs');
console.log('start');
//equal to:
// const fs = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

// console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}}`)

console.log('done with this task');
console.log('starting the next one');