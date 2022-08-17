//var array =["Rice","noddels","milk","choclate","bread"];
//entering 5 items in array for the grocery list
var array=[]
for (let i =0; i<=5;i++){
    var readlineSync = require('readline-sync');
    var input = readlineSync.question("Enter the grocery u need?");
    array+=input;
}
console.log(array)
console.log(array[0]) //first item of list
console.log(array[2]) // third item of list
console.log(array[-1]) // last item of list if the array increases also