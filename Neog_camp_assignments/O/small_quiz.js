var readlineSync = require("readline-sync");
var score = 0;
function play(question,answer){
    var user_answer = readlineSync.question(question);
    if(user_answer === answer ){
        console.log("You are Right!!!");
        score +=1;
    }
    else{
        console.log("You ara wrong!!!");
    }
    console.log("Current score:",score);
    console.log("---------------------------")


}

var questions = [ {
    question: "Who is my favorite superhero?",
    answer: "Dhruv"
  },
  
  {
    question: "Which is my favorite sad song?",
    answer: "Channa Meraya"
  },
  {
    question:"What is my favourite food?",
    answer:"Biryani"
  },
  {
    question:"which is my Bike?",
    answer:"Royal Enfield"
  },
  {
    question:"what is my hobby?",
    answer:"MMA"
  }
];
  
for (var i =0; i<questions.length; i++){
    var cuurentQuestion = questions[i];
    play(currentQuestion.question,cuurentQuestion.answer)


}


