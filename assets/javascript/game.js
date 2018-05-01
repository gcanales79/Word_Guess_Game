var teams = ["Real Madrid", "Barcelona", "Bayern Munich", "Chelsea", "Milan", "Liverpool", "Porto", "Borussia Dortmund", "Juventus"];
var word = teams[Math.floor(Math.random()*teams.length)].toLowerCase();
var lives=6
var letters =[]
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var guess=[]

console.log(word);

document.getElementById("lives").innerHTML=lives;

document.getElementById("guess").innerHTML=letters;


// Replace letters with _
for (var i=0;i<word.length;i++){
    if (alphabet.indexOf(word[i]) == -1){
        guess.push(word[i]);
    } else {
        guess.push("_");}
}
document.getElementById("secret").innerHTML = guess;

console.log(guess);

//Game

document.onkeyup = function(event) {le
    var letters = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(letters);
}







  

