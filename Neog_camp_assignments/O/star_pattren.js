var readlineSync = require('readline-sync');
var input = readlineSync.question("Give a num to make a pattren length??");
let pattren = "";
for (let i=1; i<=input; i++){
    for (let j =0; j<i; j++){
        pattren+="*";
    }
    pattren +="\n";
}
console.log(pattren)