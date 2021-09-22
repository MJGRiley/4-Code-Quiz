var timer = {
    html: document.getElementById("timer"),
    time: 0,
}  
var quiz = {
    header: ['Commonly used data types DO NOT include:','The condition in an if / else statement is enclosed within _____.','Arrays in JavaScript can be used to store _______.'],
    0:  ['strings','quotes','numbers and strings'],
    1:  ['booleans','curly brackets','other arrays'],
    2:  ['alerts','parentheses','booleans'],
    3:  ['numbers','square brackets','all of the above'],
    correct: [2,2,3]
}
//grabs the start button and sets the js variable for use
var sBtn = document.getElementById("start");
//Listens for the Start Quiz button to be clicked
sBtn.addEventListener('click',function () {
    //starts the timer and outputs it to the timer box
    setInterval(function () {
        timer.time++;
        timer.html.textContent = timer.time;
    }, 1000);
    startQuiz();
});

function outWithTheOld() { 
    OldNews = document.getElementById('quizBox');
    OldNews.remove();
}

function startQuiz() {
    var thatNew = {
        h1: document.createElement('h1'),
        ul: document.createElement('ul'),
        li: document.createElement('li'),
    }
    //TODO: How do I set the text of the header and LI?
    thatNew.h1.value(quiz.header[1]);
    for (i=0;i<4;i++) {
        thatNew.ul.appendChild(thatNew.li.textContent(quiz[i]));
    }
    console.log(thatNew);
    outWithTheOld();
    
}

//function init() {
    //timer = 0
//}