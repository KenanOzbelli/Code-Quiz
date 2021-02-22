var goBackBtn = document.getElementsByClassName("goBackButton"),
    clearBtn = document.getElementsByClassName("clearBtn"),
    highscores = JSON.parse(localStorage.getItem("highScores")|| "[]"),
    scoreList = document.getElementById("score-list");

    highscores.sort(function(a,b){
        return b.score - a.score
    })

    for(var i = 0; i < highscores.length; i++){
        var newLi = document.createElement("li")
        newLi.textContent = highscores[i].name + "-" + highscores[i].score
        scoreList.appendChild(newLi)
    }


    clearBtn.addEventListner("click", function(){
        localStorage.clear();
        history.back()
    });
    goBackBtn.addEventListner("click", function(){
        history.back();
    })