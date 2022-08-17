var readline_Sync = require("readline-sync");
var user_name = readline_Sync.question("Enter your name");
var user_score = 0;

function Quiz_to_know_me(question){
    if(readline_Sync.keyInYN(question)){
      console.log("You are Right!!!");
      user_score +=30;
    }
    else{
        console.log("You ara wrong!!!");
    }
    console.log("Current score:",user_score);
    console.log("---------------------------")
}

var questions = [ 
   "Do I know You?","Is my name Shabrez.G?","Is My favourite food Biryani?","Do I own A Bike?","Do I play MMA?"];

for (var i=0; i<questions.length;i++){
  Quiz_to_know_me(questions[i])
}

function top_score(score){
  if (user_score >= score){
    new_top_score = user_score;
    return new_top_score;
    //top_score.push({Name:user_name,Score:user_score});
  }
  else{
    return score;
  }

}
  var top_scores=[{
    Name:"shabaz",
    Score:100
  },{
    Name:"arbaz",
    Score:80
  },{
    Name:"Manish",
    Score:80
  },{
    Name:"Sameer",
    Score:90
  }]
  for (var i =0; i<top_scores.length; i++){
    var current_score = top_scores[i];
    top_score(current_score.Score)
    
  }

if(new_top_score != null){
  console.log("Hurray!! you break a new record of highscore")
}
else{
  console.log("Better luck next time!!!")
}
