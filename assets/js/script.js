//somewhere to append all the quiz questions from
var appendHere = document.getElementById('appendHere');
var interval;
var quizBox;
var qCount = 0;
var timer = {
    html: document.getElementById("timer"),
    time: 70,
}  
//Questions and answers for the quiz
var quiz = {
    0: ['Commonly used data types DO NOT include:','strings','booleans','alerts','numbers',],
    1: ['The condition in an if / else statement is enclosed within _____.','quotes','curly brackets','parentheses','square brackets',],
    2: ['Arrays in JavaScript can be used to store _______.','numbers and strings','other arrays','booleans','all of the above'],
    correct: [2,2,3],
}
//grabs the start button and set the js variable for use
var sBtn = document.getElementById("start");
//Listens for the Start Quiz button to be clicked
sBtn.addEventListener('click',function () {
    timer.html.textContent = timer.time;
    timer.time--
    //starts the timer and outputs it to the timer box every second
    interval = setInterval(function () {
        timer.html.textContent = timer.time;
        timer.time--;
        //if the timer runs out > game over
        if (timer.time < 0){
            gameOver();
        }
    }, 1000);
    //calls the first question when clicked
    setupQ();
});
//Gets the next question if you're correct & after clicking start button
function setupQ() {
    //clears everything main and everything in it
    quizBox = document.querySelector('.quizBox');
    quizBox.remove();
    //creates the main element to put everything in
    var tempmain = document.createElement('main');
    //sets it's class so the remove feature above works
    tempmain.setAttribute('class','quizBox');
    //making the elements to display the question
    var temph2 = document.createElement('h2');
    var tempul = document.createElement('ol');
    for (i=0;i<4;i++) { //putting the answers in the il and appending them to tempul
        var templi = document.createElement('li');
        var tempbutton = document.createElement('button');
        //this singles out the correct answers
        if (i === quiz.correct[qCount]) {tempbutton.setAttribute('class','correct');
        } else { tempbutton.setAttribute('class','wrong' + i);
        }
        //If you get through the quiz before time runs out this catches and starts the score feature
        if (qCount == 3){
            gameOver();
            return;
        }
        //putting the text in the buttons
        tempbutton.appendChild(document.createTextNode(quiz[qCount][i+1]));
        templi.appendChild(tempbutton);
        tempul.appendChild(templi);
        }
    //it puts the text in the h2
    temph2.appendChild(document.createTextNode(quiz[qCount][0]));
    tempmain.appendChild(temph2);
    tempmain.appendChild(tempul);
    appendHere.appendChild(tempmain);
    qCount++;
    refresh();
} 

function refresh() {//adds a listener for each of the 5 possible buttons on each page
    document.querySelector('.correct').addEventListener('click',function(){
        setupQ();
        //TODO:add correct ::after quizBox
        });
    document.querySelector('.wrong0').addEventListener('click',wrong);
    document.querySelector('.wrong1').addEventListener('click',wrong);
    if (qCount>=3){document.querySelector('.wrong2').addEventListener('click',wrong);}
    if (qCount!==3){document.querySelector('.wrong3').addEventListener('click',wrong);}
}

function wrong() {
    timer.time = timer.time -30
    setupQ();
}

function gameOver() {
    quizBox.remove();
    clearInterval(interval);
    timer.html.textContent = "Score!";
    var finalh2 = document.createElement('h2');
    finalh2.textContent = 'All Done!';
    var finalmain = document.createElement('main');
    var finalp = document.createElement('p')
    finalp.textContent = "You scored " + timer.time + "!";
    var finalinput = document.createElement('input')
    finalinput.setAttribute('placeholder','Enter Your Initials');
    finalinput.setAttribute('type','text');
    finalinput.setAttribute('class','initials');
    var finalsubmit = document.createElement('input');
    finalsubmit.setAttribute('type','submit');
    finalsubmit.setAttribute('class','scoreMe');
    var finala = document.createElement('a');
    finala.setAttribute('href', './highscores.html');
    finala.appendChild(finalsubmit);
    finalmain.appendChild(finalh2);
    finalmain.appendChild(finalp);
    finalmain.appendChild(finalinput);
    finalmain.appendChild(finala);
    appendHere.appendChild(finalmain);
    submitScore();
}

function submitScore(){
    var finalScore;
        document.querySelector('.scoreMe').addEventListener('click',function(){
        finalScore = {
        initials: document.querySelector('.initials').value.trim(),
        score: timer.time,
        }
        console.log(finalScore);
        
        localStorage.setItem('newScore',JSON.stringify(finalScore));
    })
}