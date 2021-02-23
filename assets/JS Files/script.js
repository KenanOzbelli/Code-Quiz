
var secondsLeft = 75;
var questionNumber = -1;
var questionNumberTxt = 1;
var questionHeading = document.querySelector('.questionHeading');
var questionText = document.querySelector('.questionText');
var startBtn = document.getElementById("startbutton");
var submitBtn = document.getElementById("submitBtn");
var timerEl = document.getElementById("timer");
var userScoreEl = document.getElementById("user-score");
var responseFeed = document.querySelector(".responseFeed");
var userNameInput;
var answerContainer = document.getElementById("answers"); 
var Answer; 

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

    if(secondsLeft <= 0 || questionNumber === questions.length){
        clearInterval(counter);
        displayScore();
    }
},1000)
}

const generateQuestions = () => {
    questionNumber++;
    
    if(questionNumber >= 6){
        return;
    }
    // Heading for Questions 
    questionHeading.innerText = "Question " + questionNumberTxt;
    questionNumberTxt++;

    // variables for the question attributes
    let Question = questions[questionNumber].choices;
    let Title = questions[questionNumber].title;
    Answer = questions[questionNumber].answer;

    answerContainer.innerHTML = "";

    questionText.innerHTML = Title;

    Question.map((data)=>{
        const button = document.createElement("button");

        button.innerText = `${data}`;

        answerContainer.appendChild(button).setAttribute("class", "btn-block btn-dark")
    });
}

answerContainer.addEventListener("click", event => {
    if(event.target.textContent === Answer){
        responseFeed.innerText = "Correct";
        setTimeout(()=> {
            responseFeed.innerText = "";
        }, 500)
        secondsLeft = secondsLeft + 5;
    }else{
        responseFeed.innerText = "Incorrect";
        setTimeout(()=> {
            responseFeed.innerText = "";
        }, 500)
        secondsLeft = secondsLeft - 10;
    }
        generateQuestions();
})

const displayScore = () => {
    document.querySelector("#questions").classList.add("d-none");
    document.querySelector("#submit-score").classList.remove("d-none");

    userScoreEl.innerText = 'Seconds Left ' + secondsLeft;
}

const submitScore = (event) => {
    event.preventDefault();

    var highscores = JSON.parse(localStorage.getItem("Highscores" || [])) == null ? [] : JSON.parse(localStorage.getItem("Highscores"|| []));

    let name = document.querySelector('#userName').value;
    let addScore = secondsLeft;

    const user ={
        name: name,
        score: addScore
    }

    highscores.push(user);

    localStorage.setItem("Highscores", JSON.stringify(highscores));
    window.location.href ='highscores.html';
}

startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", submitScore);