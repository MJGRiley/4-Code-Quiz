var timer = {
    html: document.getElementById("timer"),
    time: 0,
    
}  
console.log(timer.html);
var sBtn = document.getElementById("start");
console.log(sBtn);
sBtn.addEventListener('click',function () {
    setInterval(function () {
        timer.time++;
        timer.html.textContent = timer.time;
    }, 1000)
});

//function init() {
    //timer = 0
//}