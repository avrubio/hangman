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
// Function to build the hangman visualization based on the number of remaining guesses
function buildHangman(remainingGuesses) {
  const hangmanParts = [
    "  _______\n |       |\n         |\n         |\n         |\n         |\n_________|\n",
    "  _______\n |       |\n O       |\n         |\n         |\n         |\n_________|\n",
    "  _______\n |       |\n O       |\n |       |\n         |\n         |\n_________|\n",
    "  _______\n |       |\n O       |\n/|       |\n         |\n         |\n_________|\n",
    "  _______\n |       |\n O       |\n/|\\      |\n         |\n         |\n_________|\n",
    "  _______\n |       |\n O       |\n/|\\      |\n/        |\n         |\n_________|\n",
    "  _______\n |       |\n O       |\n/|\\      |\n/ \\      |\n         |\n_________|\n",
  ];

  console.log(hangmanParts[6 - remainingGuesses]);
}

//fuction to check if the guess is correct
function checkGuess(word, guessedLetter) {
  //CHeck if the word contains the gussed letter
  return word.includes(guessedLetter);
}

//function to update the remaining guesses
function updateGuesses(remainingGuesses, isCorrectGuess) {
  //Decrease remaining guesses if the guess is incorrect
  if (!isCorrectGuess) {
    remainingGuesses--;
  }
  // Return the updated remaining guesses
  return remainingGuesses;
}

//function to check if the game is over or not
function isGameOver(word, display, remainingGuesses) {
  //Check if the word/display is fully guessed or if remaining guesses are 0
  return !display.includes("_") || remainingGuesses === 0;
}

//Main game starting loop
function startGame() {
  //pick a random word
  const randomWord = getRandomWord();
  let display = initializeDisplay(randomWord);
  let remainingGuesses = 6;
  let guessedLetters = [];

  //Repeat until the game is won or the amount of guesses is equal to zero
  while (!isGameOver(randomWord, display, remainingGuesses)) {
    console.log(display);
    buildHangman(remainingGuesses); // Display the current state of the hangman
    console.log(`Remaining guesses: ${remainingGuesses}`);
    let guessedLetter = prompt
      .question("Please guess a letter: ")
      .toLowerCase();

    if (guessedLetters.includes(guessedLetter)) {
      console.log("You have already guessed this letter. Try another one.");
      continue; // Skip the rest of the loop and start a new iteration
    }

    guessedLetters.push(guessedLetter);

    const isCorrectGuess = checkGuess(randomWord, guessedLetter);
    display = updateDisplay(randomWord, display, guessedLetter);
    remainingGuesses = updateGuesses(remainingGuesses, isCorrectGuess);
  }

  if (remainingGuesses > 0) {
    console.log(`Congratulations! You guessed the word: ${randomWord}`);
  } else {
    console.log(`Sorry, you ran out of guesses. The word was: ${randomWord}`);
  }
}
startGame();
