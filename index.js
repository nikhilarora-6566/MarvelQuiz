var chalk =require("chalk");
var score = 0
var readlineSync=require("readline-sync");
var userName=readlineSync.question(chalk.bold.rgb(204,0,0)("What's your name?\n-> "));
console.log("\nWelcome",chalk.bold.rgb(204,0,0)(userName.toUpperCase()),"\n");
console.log(chalk.bold.rgb(204,0,0)("*********************\n"));
console.log("Let's Begin the Game!\n");
console.log(chalk.bold.rgb(204,0,0)("*********************\n"));
function quiz(Question,options,Answer)
{  
  console.log(Question);
  var userAnswer=readlineSync.question(chalk.bold.rgb(204,0,0)(options));
  if(userAnswer.toUpperCase()===Answer.toUpperCase())
  {
    score=score+1;
    console.log(chalk.bold.rgb(0,255,0)("Correct Answer!"));
  }
  else
  {
    console.log(chalk.bold.rgb(255,0,0)("Wrong Answer!"));
    console.log(chalk.bold.rgb(51,255,51)("Right answer is : ",Answer));
   
  }
   
   console.log(chalk.bold("-------------------------"));
}
var Questions= [{
  question: "1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?\n",
  options:"a. 2005\nb. 2008\nc. 2010\nd. 2012\n-> ",
  answer: "b",
},
{
  question: "2. What animal does Darren Cross unsuccessfully shrink in the Ant-Man?\n",
  options:"a. Mouse\nb. Sheep\nc. Duck\nd. Hamster\n-> ",
  answer: "b",
},
{
   question:"3.What type of doctor is Stephen Strange?\n ",
   options:"a. Neurosurgeon\nb. Cardiothoracic Surgeon\nc. Trauma Surgeon\nd. Plastic Surgeon\n-> ",
   answer: "a",
},
{
  question:"4. Who is killed by Loki in the Avengers?\n",
  options:"a. Maria Hill\nb. Nick Fury\nc. Agent Coulson\nd. Doctor Erik Selvig\n-> ",
  answer: "c",
},
{
  question:"5. What landmark does Peter Parker rescue his classmates from in Spider-Man: Homecoming?\n",
  options:"a. Washington Monument\nb. Statue of Liberty\nc. Mount Rushmore\nd. Golden Gate Bridge\n-> ",
  answer: "a", 
},
{
  question:"6. What is Captain America's shield made off?\n",
  options:"a. Adamantium\nb. Vibranium\nc. Promethium\nd. Carbonadium\n-> ",
  answer:"b",
},
{
  question:"7. Before becoming Vision, what is the name of Iron Man's A.I. butler?\n",
  options:"a. H.O.M.E.R.\nb. J.A.R.V.I.S.\nc. A.L.F.R.E.D.\nd. M.A.R.V.I.N.\n-> ",
  answer:"b",
},
{
  question:"8. What id the alien race Loki sends to invade Earth in The Avengers?\n",
  options:"a. The Chitauri\nb. The Skrulls\nc. The Kree\nd. The Flerkens\n-> ",
  answer:"a",
},
{
  question:"9. Who was the last holder of the Space Stone before Thanos claims it for his infinity Gauntlet?\n",
  options:"a. Thor\nb. Loki\nc. The Collector\nd. Tony Stark\n-> ",
  answer:"b",
},
{
  question:"10. What fake name does Natasha use when she first meets Tony?\n",
  options:"a. Natalie Rushman\nb. Natalia Romanoff\nc. Nicole Rohan\nd. Naya  Rabe\n-> ",
  answer:"a",
}]

for(var i=0;i<Questions.length;i++)
{
  var currentQuestion = Questions[i];
  quiz(currentQuestion.question,currentQuestion.options,currentQuestion.answer)
}
if(score<=4)
{
  console.log(chalk.bold.redBright("\nNot Played Well\nYou scored: ",score));
}
else if(score>=5 && score<=7)
{
  console.log(chalk.bold.yellowBright("\nWell Played\nYou scored: ", score));
}
else
{
  console.log(chalk.green("\nHurray!!\nYou Scored: ",score));
}