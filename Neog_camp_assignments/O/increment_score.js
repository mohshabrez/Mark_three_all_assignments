var readlineSync = require('readlineSync');
var homeTown = readlineSync.question("What is my Home Town?");
console.log(homeTown);
var score=0;
if (homeTown == "Banglore"){
    score+=1;
    console.log("You are right!!!");
    console.log("Your score is"+score);
}
else{
    console.log("you are wrong!!!");
    console.log("Your score is"+score);
}