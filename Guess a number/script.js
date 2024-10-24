let input = document.getElementById('input');
let btn = document.getElementById('btn');
let wrong = document.querySelector('.wrong');
let guesses = document.getElementById('guesses');


let answer = Math.floor(Math.random() * 100) + 1;
let numGuesses = 0;


btn.addEventListener("click", () => {
    guessesNumber();
});

function guessesNumber() {
    let userGuess = parseInt(input.value); 

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        wrong.innerHTML = "Enter a number between 1 to 100";
    } else {
        numGuesses++; 

        if (userGuess === answer) {
            wrong.innerHTML = `Correct! The number was ${answer}. You guessed it in ${numGuesses} tries.`;
        
            resetGame();
        } else if (userGuess < answer) {
            wrong.innerHTML = "Too low! Try again.";
        } else {
            wrong.innerHTML = "Too high! Try again.";
        }


        guesses.innerHTML = `No. of Guesses: ${numGuesses}`;
    }


    input.value = "";
}

function resetGame() {
   
    answer = Math.floor(Math.random() * 100) + 1;
    numGuesses = 0;

 
    wrong.innerHTML = "";
    guesses.innerHTML = "No. of Guesses: 0";
}
