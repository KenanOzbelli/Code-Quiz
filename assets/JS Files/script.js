var startBtn = document.getElementById("startbutton");
var submitBtn = document.getElementById("submitBtn");
var secondsLeft = 75;
var timerEl = document.getElementById("timer");
var userScoreEl = document.getElementById("user-score");
var userNameInput;
var questionText = document.getElementById("questions");
var answerChoiceText = document.getElementById("answers"); 
var questionNumber = -1;
var answer; 


function startTime(){

    document.getElementById("startingPage").classList.add("d-none");
    document.getElementById("quizQ").classList.remove("d-none");

    setTime();
    generateQuestions();
}

function setTime(){
    var count = setInterval(function(){
        secondsLeft--;
        timerEl.textContent = "Time: " + secondsLeft;
        
        if (secondsLeft === 0 || questionNumber === questions.length){
            clearInterval(count);
            setTimeout(displayScore , 500);
        }
    }, 1000)
}
function generateQuestions(){
        questionNumber++;


 answer = questions[questionNumber].answer

questionText.textContent = questions[questionNumber].title;
answerChoiceText.innerHTML = "";

var choices = questions[questionNumber].choices;

    for( var i = 0; i < choices.length; i++){
        var nextChoice = document.createElement("button"); 
        nextChoice.textContent = choices[i]

        answerBtn = answerChoiceText.appendChild(nextChoice).setAttribute("class", "btn-block btn-dark");
    }
   
}

function displayScore(){
    document.getElementById("quizQ").classList.add("d-none");
    document.getElementById("submit-score").classList.remove("d-none");
    userScoreEl.textContent = "your Final Score is " + secondsLeft;

}


startBtn.addEventListener("click",startTime);
submitBtn.addEventListener("click",function(event){
    event.stopPropagation();
    addScore();

    window.location.href = "highscores.html";
});

function addScore(){
    userNameInput = document.getElementById("userName").value 

    var newScore ={
        name: userNameInput,
        score: secondsLeft
    };

    var highScore = JSON.parse(localStorage.getItem("highScores" || []));

    highScore.push(newScore);

    localStorage.setItem("highScore", JSON.stringify(highScore));

}

function hideFeedback(){
    var pEl = document.getElementsByClassName("responseFeed")[0]
    pEl.style.display = "none"
}

function showFeedback(){
    var pEl = document.getElementsByClassName("responseFeed")[0]
    pEl.removeAttribute("style");
}

answerChoiceText.addEventListener("click", function(event){
    var pEl = document.getElementsByClassName("responseFeed")[0]

    if(answer === event.target.textContent){
        pEl.innerHTML="Correct!";
        setTimeout(hideFeedback, 1000);
        secondsLeft = secondsLeft + 5; 
        showFeedback();
    }else{
        pEl.innerHTML= "Incorrect my guy";
        setTimeout(hideFeedback,1000);
        secondsLeft = secondsLeft - 10;
        showFeedback();
    }
    generateQuestions();
});