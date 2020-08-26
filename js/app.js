
//create varaibles for buttons and a event on click for search button
        const searchBtn = document.getElementById("search");
        searchBtn.addEventListener("click",calculate);
        //create varaibles for buttons and a event on click for restart button
        const restartBtn = document.getElementById("restart");
        restartBtn.addEventListener("click", restart);
        //variables for the guess counter and guess remainder
        var count = 0 ;
        var guessLeft = 10;

        //function that starts on the search button click
        function calculate (){
            //creates random number and captures user input value 
            let rng = Math.floor(Math.random() *20) + 1;
            let userGuess = document.getElementById("userGuess").value;
            //Writes the number generated to the html to show user
            document.getElementById("correctanswer").innerHTML ="The correct answer was: " + rng;

            //if / else statement  for if user and answer is the same 
            if (userGuess == rng){
                //adds to counter
                ++count;
                //displays the counter to html 
                document.getElementById("guesses").innerHTML=count;
                //displays message if you guessed the right answer
                document.getElementById("message").innerHTML = "You Are Correct"
                //disables search button so user restarts game
                searchBtn.disabled = true;
            }else {
                //adds to counter 
                ++count;
                //displays coutner
                document.getElementById("guesses").innerHTML= count
                //subtracts from guesses left counter
                --guessLeft;
                //displays guesses/tries left
                document.getElementById("guessLeft").innerHTML = guessLeft;
                //message telling user to try again
                document.getElementById("message").innerHTML = "Try again"
            };
            // If guesses left reaches 0
            if (guessLeft == 0){
                //disables search button
               searchBtn.disabled = true;
               //show message that you lose
               document.getElementById("message").innerHTML = "You Lose"
            }

        };

        //function to restart game used by restart button
        function restart(){
            userGuess.value = "";
            count = 0;
            guessLeft = 10;
            document.getElementById("guesses").innerHTML="";
            document.getElementById("guessLeft").innerHTML = guessLeft;
            searchBtn.disabled = false;
        };
        
 