function check_ans(question,answer){
    var score=0
    var readlineSync = require('readline-sync');
    var user_answer = readlineSync.question(question);
    console.log(user_answer);
    if(answer == user_answer){
        score+=1
        console.log("Hurray! You are right");
        console.log("your score is"+score);
    }
    else{
        console.log("You are wrong");
        console.log("your score is"+score);
    }
}
check_ans("Where do I stay?","Banglore")