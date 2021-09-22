var timer = {
    html: document.getElementById("timer"),
    time: 0,
}  

console.log(timer.html);


setInterval(function () {
    timer.time++;
    timer.html.textContent = timer.time;
    console.log(timer.html);
    console.log(timer.time);

}, 1000)

var sBtn = document.getElementById("start")
//sBtn.addEventListener('click', function () {

//})

//function init() {
    //timer = 0
//}