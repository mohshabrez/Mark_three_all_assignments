var readlineSync = require('readlineSync');
var user = readlineSync.question("May I know your name?");
console.log("welcome"+user);