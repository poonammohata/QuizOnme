//importing readline package and chalk
var readlineSync=require('readline-sync');
const chalk=require('chalk');

//list of questions and answers
var list=[
  {
    question:"What is her favourite color? ",
    answer:"white"
  },
  {
    question:"Which ice-cream do she like the most? ",
    answer:"vanilla"
  },
  {
    question:"Would she rather be too busy or bored? ",
    answer:"too busy"
  },
  {
    question:"What weather do she prefer? ",
    answer:"cool"
  },
  {
    question:"Would she rather be too busy or bored? ",
    answer:"too busy"
  },
]
//array store scores
var score=[
  {
    name:"poonam",
    score:8
  },
  {
    name:"prachi",
    score:9
  }
]

//function to check highestscore
function highScore(){
  var max=score[0].score;
  for(var i=1;i<score.length;i++){
    if(max<score[i].score){
      max=score[i].score;
    }
  }
  return max;
}
//function to check the person who scored highest score
function highScorePerson(){
  var max=score[0].score;
  var highperson=score[0].name;
  for(var i=1;i<score.length;i++){
    if(max<score[i].score){
      highperson=score[i].name;
    }
  }
  return highperson;
}
//variable count the score
var count=0;

var name=readlineSync.question(chalk.red("What is your name "));
console.log(chalk.red.bold.bgMagenta("\n  Welcome "+name+"  \n"));
console.log(chalk.red("Let's see how much you know Poonam\n"));

//function for qna
function qna(question,answer){
  var userAns=readlineSync.question(chalk.cyanBright(question))
  if(userAns==answer){
    count=count+2;
    console.log(chalk.green("Yippi!!You are right"));
    console.log(chalk.green("You got 2 points"));
  }
  else{
    console.log(chalk.redBright("You are wrong"));
  }
  console.log(chalk.rgb(123, 45, 67)("============================================="))
}


//looping question answer
for(var i=0;i<list.length;i++){
  qna(list[i].question,list[i].answer)
}

var highScore=highScore();
var highScoreName=highScorePerson();

console.log(chalk.red.bold.bgMagenta("  "+name+" your score is "+count+"  "));
console.log(chalk.blue("The highest score is "+highScore+" and it is scored by "+highScoreName))
console.log(chalk.red("if u have beaten the highest score,send the screenshot"));
