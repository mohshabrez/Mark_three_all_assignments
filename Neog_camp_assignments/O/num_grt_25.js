var readlineSync = require('readline-sync');
var myAge = readlineSync.question("Am I older than 25?");
console.log(int(myAge));
if (myAge == 25){
    console.log("You are right!!!")
}
else{
    console.log("you are wrong!!!")
}