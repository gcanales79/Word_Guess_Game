var teams = ["real madrid", "barcelona", "bayern munich", "chelsea", "milan", "liverpool", "porto", "borussia dortmund", "juventus"];
var lives=6 // Initial Condition
var letters =[] //Inital Condition
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var guess=[] //Initial Condition
var comparison=-1; // Initial Contidion
var answer=[]; //Initial Condition
wins=0;
losses=0;
var images=["assets/images/Real_madrid.png","assets/images/Barcelona.png","assets/images/Bayern_Munich.png","assets/images/Chelsea.png","assets/images/Milan.png","assets/images/Liverpool.png","assets/images/Porto.jpg","assets/images/Borussia_dortmund.png","assets/images/Juventus.png"]
winAudio=new Audio ("assets/images/winaudio.m4a");


//Initial comments
document.getElementById("lives").innerHTML=lives;
document.getElementById("guess").innerHTML=letters;
document.getElementById("Scorewins").innerHTML=wins;
document.getElementById("Scoreloss").innerHTML=losses;


// Initial Conditions and replace letters with _
var word = teams[Math.floor(Math.random()*teams.length)].toLowerCase();
console.log(word);
for (var i=0;i<word.length;i++){
    if (alphabet.indexOf(word[i]) == -1){
        guess.push(word[i]);
    } else {
        guess.push("_");}
}
document.getElementById("secret").innerHTML = guess.join(" ");
//End of initial conditions

//Make array fo the answer to compare
for (var i=0;i<word.length;i++){
    answer.push(word[i]);
}

//Game

    document.onkeyup = function(event) {
        if(lives>0){
        var key = String.fromCharCode(event.keyCode).toLowerCase();


        //Avoid repeat letters
        console.log(letters.indexOf(key));
        if (alphabet.indexOf(key)>-1){ // To review that letters are on the alphabet
        if(letters.indexOf(key)==-1){
            letters.push(key);
            console.log(letters.indexOf(key));
        document.getElementById("guess").innerHTML=letters.join(" ");
    console.log(letters);
    console.log (key);
    comparison=comparison+1;


    //If they get the wrong letter
       if(word.indexOf(key)==-1){
           lives=lives-1
           document.getElementById("lives").innerHTML=lives;
       }

    // Review if the letter is on the word
           for (var i=0;i<word.length;i++){
                    if (word[i]==letters[comparison]){
                    guess[i]=letters[comparison];
                    document.getElementById("secret").innerHTML = guess.join(" ");
                    console.log(guess);
                   }
            }

    // Review if you have win
            
        if(lives>0){
            if (guess.toString()==answer.toString()){
                document.getElementById("Message").innerHTML="You Win!!!";
                value=teams.indexOf(answer.join(""));
                document.getElementById("win").src=images[value];
                winAudio.play();
                wins=wins+1;
                document.getElementById("Scorewins").innerHTML=wins;
                //Initial Conditions and replace letters with _
                letters =[];
                guess=[];
                lives=6;
                answer=[];
                comparison=-1;

                word = teams[Math.floor(Math.random()*teams.length)].toLowerCase();
                console.log(word);
                for (var i=0;i<word.length;i++){
                    if (alphabet.indexOf(word[i]) == -1){
                        guess.push(word[i]);
                    } else {
                        guess.push("_");}
                }
                document.getElementById("lives").innerHTML=lives;
                document.getElementById("guess").innerHTML=letters;
                document.getElementById("secret").innerHTML = guess.join(" ");
                //End of initial conditions
                //Make array fo the answer to compare
                for (var i=0;i<word.length;i++){
                answer.push(word[i]);
                }
            }

        
           else{
               document.getElementById("Message").innerHTML="Try antoher key";
           }
        }
        else{
            document.getElementById("Message").innerHTML="You Loss Better Luck Next Time";
            document.getElementById("win").src="assets/images/loss.jpg";
            losses=losses+1;
            document.getElementById("Scoreloss").innerHTML=losses;
            //Initial Conditions and replace letters with _
            letters =[];
            guess=[];
            lives=6;
            answer=[];
            comparison=-1;

            word = teams[Math.floor(Math.random()*teams.length)].toLowerCase();
            console.log(word);
            for (var i=0;i<word.length;i++){
                if (alphabet.indexOf(word[i]) == -1){
                    guess.push(word[i]);
                } else {
                    guess.push("_");}
            }
            document.getElementById("lives").innerHTML=lives;
            document.getElementById("guess").innerHTML=letters;
            document.getElementById("secret").innerHTML = guess.join(" ");
            //End of initial conditions
            //Make array fo the answer to compare
            for (var i=0;i<word.length;i++){
            answer.push(word[i]);
            }




        }
    } //close IF for repeat letters
    }
    }
    else{
        document.getElementById("Message").innerHTML="You Loss Better Luck Next Time";
    }
    

    }











  

