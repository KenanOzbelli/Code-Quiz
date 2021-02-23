const clearbtn = document.querySelector('.clearBtn');
const goBackBtn = document.querySelector('.goBackBtn');
var highscores = JSON.parse(localStorage.getItem("Highscores" || "[]")) == null ? [] : JSON.parse(localStorage.getItem("Highscores" || "[]"));
var scoreList = document.querySelector('#score-list');

    highscores.sort(function(a,b){
        return b.score - a.score
    })

    for(var i = 0; i < highscores.length; i++){
        var newLi = document.createElement("li")
        newLi.textContent = highscores[i].name + " - " + highscores[i].score
        scoreList.appendChild(newLi)
    }

    clearbtn.addEventListener("click", (event)=> {
        event.preventDefault();
        localStorage.clear();
        history.back();
    });
    goBackBtn.addEventListener("click", function(){
        history.back();
    })