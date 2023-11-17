// import required modules
import prompt from 'readline-sync';

import wordBank from './word-bank.js';

console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");
console.log(wordBank[0]);
// function to pick a random word from the word bank
/* link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomWord() {
  // this will return a random word.aa
  let randomIndex = Math.floor(Math.random() * wordBank.length);
  console.log(randomIndex);
  return wordBank[randomIndex];
}

console.log(getRandomWord());

// function to initialize the game play display it will render underscores for each letter in the word. This function accepts a string as a parameter.
function initializeDisplay(word) {
  // this will render the underscores for each letter in the word.
  // create a display string with underscores for each letter in the word
  //  return the display string
}

//function to update the display that the user can see
function updateDisplay(string) {
  //replace the underscores in the display with the correct guessed letter if it is in the word.
}

//fuction to check if the guess is correct
function checkGuess(word, gussedLetter) {
  //CHeck if the word contains the gussed letter
  //Return true or false (Boolean)
}

//function to update the remaining guesses
function updateGuesses(remainingGuesses, isCorrectGuess) {
  //Decrease remaining guesses if the guess is incorrect
  // Return the updated remaining guesses
}

//function to check if the game is over or not
function isGameOver(word, remainingGuesses) {
  //CHeck if the word is fully guessed or if remaing gusses are 0
  //Return  true or false
}

//Main game starting loop
function startGame() {
  //pick a random word
  const randomWord = getRandomWord();
  let display = initializeDisplay();
  let remainingGuesses = 6;
  let guessedLetter = [];

  //Repeat until the game is won or the amount of guesses is equal to zero
  while (!isGameOver(word, display, remainingGuesses)) {
    console.log(display);
    console.log(`Remaing guesses ${remainingGuesses}`);
    let guessedLetter = prompt.question("Please guesses a letter");
    // add logic to check if the letter was already guessed
    if (guessedLetters.includes) {
      //if true render a message indicating that they have already guessed the letter. Do not update the count.
    }
    // we can check the guess as well as update display
    // we call our methods here
  }
}
