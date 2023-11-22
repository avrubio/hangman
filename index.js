// import required modules
import prompt from 'readline-sync';

import wordBank from './word-bank.js';

// function to pick a random word from the word bank
/* link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function getRandomWord() {
  // this will return a random word.aa
  let randomIndex = Math.floor(Math.random() * wordBank.length);
  return wordBank[randomIndex];
}

// function to initialize the game play display it will render underscores for each letter in the word. This function accepts a string as a parameter.
function initializeDisplay(word) {
  console.log("\nWelcome to Hangman!\nPress ctrl+c to stop\n");

  // Creates a display string with underscores for each letter in the word
  let display = "";
  for (let i = 0; i < word.length; i++) {
    // If the character is a letter, replace it with an underscore
    display += word[i].match(/[a-zA-Z]/) ? "_" : word[i];
  }

  // Return the display string
  return display;
}

//function to update the display that the user can see
function updateDisplay(word, display, guessedLetter) {
  //replace the underscores in the display with the correct guessed letter if it is in the word.
  let newDisplay = "";
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guessedLetter) {
      newDisplay += guessedLetter;
    } else {
      newDisplay += display[i];
    }
  }
  return newDisplay;
}

//fuction to check if the guess is correct
function checkGuess(word, guessedLetter) {
  //CHeck if the word contains the gussed letter
  word.includes(guessedLetter);
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
  let display = initializeDisplay(randomWord);
  let remainingGuesses = 6;
  let guessedLetter = [];

  //Repeat until the game is won or the amount of guesses is equal to zero
  while (!isGameOver(word, display, remainingGuesses)) {
    console.log(display);
    console.log(`Remaing guesses ${remainingGuesses}`);
    let guessedLetter = prompt.question("Please guesses a letter");
    // add logic to check if the letter was already guessed
    if (guessedLetters.includes(guessedLetter)) {
      //if true render a message indicating that they have already guessed the letter. Do not update the count.
      console.log("You have already guessed this letter. Try another one.");
      continue;
    }
    // we can check the guess as well as update display
    // we call our methods here
  }
}
startGame();
