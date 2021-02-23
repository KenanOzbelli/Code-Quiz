var questions = [
    {
        title: "Primarily, inside which tag of an HTML document do you put the JavaScript?",
        choices: ["<java>", "<body>", "<script>", "<img>"],
        answer: "<script>"
    },
    {
        title: "The condition in an if/else statement is enclosed within ______.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What is the syntax for referencing an external script called 'abc.js'?",
        choices: ["<script class='abc.js'>", "<script href='abc.js'>", "<script link='abc.js'>", "<script src='abc.js'>"],
        answer: "<script src='abc.js'>"
    },
    {
        title: "Which type of pop up box will allow a user to type a response?",
        choices: ["input", "prompt", "alert", "confirm"],
        answer: "prompt"
    },
    {
        title: "What is a DOM in JavaScript?",
        choices: ["Data of Mine", "Document of Master", "Data Object Modal", "Document Object Model"],
        answer: "Document Object Model"
    },
    {
        title: "Is JS case-sensitive?",
        choices: ["Yes", "No", "I have no clue", "Only when it feels like it."],
        answer: "Yes"
    },
];
var secondsLeft = 75;
var questionNumber = -1;
var startBtn = document.getElementById("startbutton");
var submitBtn = document.getElementById("submitBtn");
var timerEl = document.getElementById("timer");
var userScoreEl = document.getElementById("user-score");
var userNameInput;
var answerContainer = document.getElementById("answers"); 
var answer; 

function startQuiz(){
    document.querySelector("#startingPage").classList.add("d-none");
    document.querySelector("#questions").classList.remove("d-none");

    startTimer();
    generateQuestions();
}

const startTimer = () => {
    let counter = setInterval(() => {
        secondsLeft--;
        timerEl.innerHTML = "Time: " + secondsLeft;
    },1000)
    if(secondsLeft === 0 || questionNumber === questions.length){
        clearInterval(counter);
        setTimeout(displayScore, 500);
    }
}

const generateQuestions = () => {
    questionNumber++
    let Question = questions[questionNumber].choices;
    let Title = questions[questionNumber].title;
    let Answer = questions[questionNumber].answer;
    
}

const displayScore = () => {
    console.log('DONE')
}

startBtn.addEventListener("click", startQuiz);


















// function startTime(){
//     setTime();
//     generateQuestions();
// }

// function setTime(){
//     var count = setInterval(function(){
//         secondsLeft--;
//         timerEl.textContent = "Time: " + secondsLeft;
        
//         if (secondsLeft === 0 || questionNumber === questions.length){
//             clearInterval(count);
//             setTimeout(displayScore , 500);
//         }
//     }, 1000)
// }
// function generateQuestions(){
//  questionNumber++;

//  var answer = questions[questionNumber].answer;

//  questionText.textContent = questions[questionNumber].title;

//  answerChoiceText.innerHTML = "";

// var choices = questions[questionNumber].choices;

//     for( var i = 0; i < choices.length; i++){

//         var nextChoice = document.createElement("button"); 

//         nextChoice.textContent = choices[i]

//         answerBtn = answerChoiceText.appendChild(nextChoice).setAttribute("class", "btn-block btn-dark");
//     }
   
// }

// function displayScore(){
//     document.getElementById("quizQ").classList.add("d-none");
//     document.getElementById("submit-score").classList.remove("d-none");
//     userScoreEl.textContent = "your Final Score is " + secondsLeft;

// }


// startBtn.addEventListener("click",startTime);
// submitBtn.addEventListener("click",function(event){
//     event.stopPropagation();
//     addScore();

//     window.location.href = "highscores.html";
// });

// function addScore(){
//     userNameInput = document.getElementById("userName").value 

//     var newScore ={
//         name: userNameInput,
//         score: secondsLeft
//     };

//     var highScore = JSON.parse(localStorage.getItem("highScores" || []));

//     highScore.push(newScore);

//     localStorage.setItem("highScore", JSON.stringify(highScore));

// }

// function hideFeedback(){
//     var pEl = document.getElementsByClassName("responseFeed")[0]
//     pEl.style.display = "none"
// }

// function showFeedback(){
//     var pEl = document.getElementsByClassName("responseFeed")[0]
//     pEl.removeAttribute("style");
// }

// answerChoiceText.addEventListener("click", function(event){
//     var pEl = document.getElementsByClassName("responseFeed")[0]

//     if(answer === event.target.textContent){
//         pEl.innerHTML="Correct!";
//         setTimeout(hideFeedback, 1000);
//         secondsLeft = secondsLeft + 5; 
//         showFeedback();
//     }else{
//         pEl.innerHTML= "Incorrect my guy";
//         setTimeout(hideFeedback,1000);
//         secondsLeft = secondsLeft - 10;
//         showFeedback();
//     }
//     generateQuestions();
// });