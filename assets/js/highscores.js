var newScore = JSON.parse(localStorage.getItem('newScore'));
var list = document.getElementById('list');
var listItem = document.createElement('li');
listItem.textContent = newScore.initials + ": " + newScore.score;
list.appendChild(listItem);

