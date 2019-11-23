// score test
scoreTest = {'oven': 0, 'fridge': 5, 'dishwasher': 0, 'eggslicer': 0, 'standmixer': 0};
// this adds points to score
scoreTest.oven= 12
console.log(scoreTest.oven);
// this goes over all the values in score
for (var key in scoreTest){
    var value = scoreTest[key];
    console.log(value);
}
// this checks the highest value and returns the key
console.log(Object.keys(scoreTest).reduce((a, b) => scoreTest[a] > scoreTest[b] ? a : b));
score = {'oven': 0, 'fridge': 0, 'dishwasher': 0, 'eggslicer': 0, 'standmixer': 0};
// function checkWinner(){
//     Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
// }
// // this gets the results from the radio buttons
// var radios = document.getElementsByName('Question1');

// for (var i = 0, length = radios.length; i < length; i++)
// {
//  if (radios[i].checked)
//  {
//   // do whatever you want with the checked radio
//   alert(radios[i].value);

//   // only one radio can be logically checked, don't check the rest
//   break;
//  }
// }
// Create html tags
// function createCustomElement(anchorText, anchorLink){
  

//     var aTag = document.createElement("a");
//     aTag.href = anchorLink;
//     aTag.innerHTML = anchorText;
    
//     return aTag ;
//   }
  
//   var parent = document.getElementById('**theidyouchose**');
//   var customElement = createCustomElement("w3Schools", "www.w3School.com");
//   parent.appendChild(customElement);

   
var quizzName = "Which home appliance is your spirit animal?";
var introTitle = "Which home appliance is your spirit animal?";
var introText = "Here we are again, a remix of my python quiz. Answering the real question which most of us have asked ourselves; \"What type of home aplliance would I be?\" Worry no more because this quizz will answer this burning question in a few moments. You will never feel whole untill you complete this test.";
var introBtn = "Onto the quiz!" 
document.getElementById("intro-header").innerHTML = quizzName ;
document.getElementById("intro-title").innerHTML = introTitle ;
document.getElementById("intro-text").innerHTML = introText ;

var q1Title = "If you had to only eat one of these for the rest of your life which one would you choose?";
var q1Answers = ["Lightbulbs","Broken dreams" ,"Canned Tuna","Peanut Butter Sandwich" ,"E Tide Pods"];
// var q1AA = "A Lightbulb";
// var q1AB = "B Broken dreams";
// var q1AC = "C Canned Tuna";
// var q1AD = "D Peanut Butter Sandwich";
// var q1AE = "E Tide Pods";
// var q1Btn = "Onto Question 2";

var q2Title = "Which situation would be more embarrassing to you?";
var q2AA = "Forgetting a loved ones birthday";
var q2AB = "Being under dressed at an event";
var q2AC = "Having to be escorted out of a place, in front of all the humans";
var q2AD = "Slipping on the sidewalk";
var q2AE = "Forgetting to say \"bless you\" when someone sneezes";
var q2Btn = "Onto Question 3";

var q3Title = "When with a group of friends...";
var q3AA = "I am the quiet one";
var q3AB = "I am the funny one that makes people laugh";
var q3AC = "I am the one that leads and adds things to the table";
var q3AD = "I need to be the center of attention";
var q3AE = "I am the one that gently cycles through my washing program";
var q3Btn = "To Question 4";

var q4Title = "What is your favourite drink?(imagine you're at an open bar)";
var q4AA = "Water";
var q4AB = "Jack & Coke";
var q4AC = "Wine";
var q4AD = "A shot of vodka";
var q4AE = "Vodka REdbull and a MArlboro Light; because you are trash";
var q4Btn = "To Question 5";

var q5Title = "What is your spirit animal?";
var q5AA = "The Elephant";
var q5AB = "The Lion";
var q5AC = "The Tiger";
var q5AD = "The Dolphin";
var q5AE = "The Roomba 890"
var q5Btn = "See the results";

var buttonText = ["Onto the quiz!", "Onto Question 2","Onto Question 3","To Question 4","To Question 5","See the results", "Try Again?"]

var winnerText = {
    oven:['a smouldering oven','You like to keep things hot. You constantly worry and make sure that your loved ones do not get food poisoning.'] ,
    fridge:['a feisty fridge','Keeping it cool is your moto. Everything stays fresh, mostly. You and oven types are best friends who complement each other despite being polar opposite.'] ,
    dishwasher:['a dainty dishwasher', 'You get things done, no job is much and you are not scared of getting your hands a little dirty'] ,
    eggslicer:['an eggslicer',"Essential part of every kitchen, people don't realize how useful you are until they need. Have you ever tried to slice an egg with a knife?"] ,
    standmixer:['a bodacious standmixer',"You are the star of every kitchen, useful and pretty to look at. People know you are there without you having to do anything."] 
}
// Start of the JS 

    var score = {oven: 0, fridge: 0, dishwasher: 0, eggslicer: 0, standmixer: 0};

    var answers = {
        question1:{A: 'oven', B: 'fridge', C: 'dishwasher', D: 'eggslicer', E: 'standmixer'},
        question2:{A: 'standmixer', B: 'oven', C: 'fridge', D: 'dishwasher', E: 'eggslicer'} ,
        question3: {A: 'eggslicer', B: 'standmixer', C: 'oven', D: 'fridge', E: 'dishwasher'} ,
        question4:{A: 'standmixer', B: 'eggslicer', C: 'dishwasher', D: 'oven', E: 'fridge'} ,
        question5: {A: 'fridge', B: 'dishwasher', C: 'standmixer', D: 'eggslicer', E: 'oven'},
    }
    var page = 0;
    var questionLink = ['question1','question2','question3','question4','question5'];
    // var questionNum = questionLink[(page)-1];
    console.log(page);
    console.log(questionLink);
    document.getElementById("intro-btn").innerHTML = buttonText[page] ;
    document.getElementById("intro-btn").onclick = function() {nextSlide()};
    document.getElementById("dot0").setAttribute("class", "dot dota");
    document.getElementById("current-Page").innerHTML =  'Welcome';



    function nextSlide() {
        if (page === 0){
        $("#myCarousel").carousel("next");
        page = ++page;
        document.getElementById("dot"+page).setAttribute("class", "dot dota");
        document.getElementById("intro-btn").innerHTML = buttonText[page] ;
        document.getElementById("current-Page").innerHTML = "question "+page+" of 5" ;


        }
        else if (page === 6){restartGame();}
        else if (isOneChecked(questionLink[(page)-1])){
            $("#myCarousel").carousel("next");
            addToScore(questionLink[(page)-1]);
            page = ++page
            document.getElementById("dot"+page).setAttribute("class", "dot dota");
            document.getElementById("intro-btn").innerHTML = buttonText[page] ;
            if (page === 6){
                document.getElementById("current-Page").innerHTML = "Results" ;
            }
            else {
                document.getElementById("current-Page").innerHTML = "question "+page+" of 5" ;
            }

        }
    }
    function isOneChecked(question) {
        var chx = document.getElementsByName(question);
        for (var i=0; i<chx.length; i++) {
          if (chx[i].type === 'radio' && chx[i].checked) {
            return true;
          }
          else if (chx[i].type === 'select-one'){
            if (chx[i].value !== "Choose"){
                return true;
            }
          } 
        }
        return false;
    }
    function addToScore(question){
        var radios = document.getElementsByName(question);
        if (radios[0].type === 'radio'){
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    var answ = radios[i].value[2];
                    var val = answers[question][answ]
                    score[val] +=1;
                    
                    
                }
            }
        }
            else if (radios[0].type === 'select-one'){
                var answ = radios[0].value[2];
                var val = answers[question][answ]
                score[val] +=1;   
            }
            else { console.log('well you\'ve got a problem pal');}
        if (page === 5){
            checkWinner();
        }   
    }

    function checkWinner(){
        var winner = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
        console.log(winner);
        document.getElementById("conclusion").innerHTML = winnerText[winner][0];
        document.getElementById("conclusion-text").innerHTML =winnerText[winner][1];
    }

    function restartGame(){
        score = {oven: 0, fridge: 0, dishwasher: 0, eggslicer: 0, standmixer: 0};
        $("#myCarousel").carousel("next");
        for (i = 1; i < 6; i++){
            var radios = document.getElementsByName('question'+i);
        if (radios[0].type === 'radio'){
                for(var i=0;i<radios.length;i++)
                radios[i].checked = false;}
        
        else if (radios[0].type === 'select-one'){
            radios[0].value = "choose";
        }
    }
        for (i = 1; i <7; i++){
        document.getElementById("dot"+i).setAttribute("class", "dot");
    }
        page = 0
        document.getElementById("current-Page").innerHTML =  'Welcome'; 
    }


