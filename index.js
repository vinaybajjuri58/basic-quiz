// importing of the required packages.
var readLineSync = require('readline-sync');
score = 0;
// questions
var questions=[
  {
    question:"What Vinay's friends call him?",
    answer:"Vinay",
  },
   {
    question:"What is Vinay's favourite game?",
    answer:"Basket Ball",
  },
   {
    question:"What is Vinay's favourite colour ?",
    answer:"Black",
  },
   {
    question:"What is Vinay's favourite movie in recent time?",
    answer:"LUDO",
  },
]

// Function to check whether the user input is right or not
function answerChecker(question,answer){
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log("Hurray Right answer :-)");
    score=score+1;
  }else{
    console.log("Sorry you were wrong :-(")
  }
}

// Code of the quiz
var name = readLineSync.question("What is your name ?\n");
console.log("Welcome to the quiz",name);
for(var i=0 ; i<questions.length ;i++){
  var currentQuestion=questions[i];
  answerChecker(currentQuestion.question,currentQuestion.answer);
}
console.log("Your score is",score)