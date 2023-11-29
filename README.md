# Hangman Game!

## Description

This is a midterm project for my CanCode Communities JavaScript Fundamental course to showcase the skills and concepts I have learned so far in the course such as 
- Variables and constants
- Primitive data types (strings, numbers, booleans)
- Control flow and conditionals (if statements)
- Collections (arrays and objects)
- Functions
  
### Technologies Used

```
- Node.js
- readlineSync library
- Vanilla JavaScript

```

### User Stories


1. **As a player**, I want to receive a notification at the start of the game, informing me that I can stop the game at any time by pressing ctrl + c.

2. **As a player**, I want to be constantly informed during the game about:
   - The correct letters I have guessed.
   - The positions of the correctly guessed letters within the word.
   - The positions where unguessed letters are located within the word.
   - The number of remaining guesses I have.

3. **As a player**, I want the game to treat upper and lower case letters as the same, ensuring that my guesses are case insensitive.

4. **As a player**, I want the game to notify me if I've already guessed a letter, so I don't waste a guess on a letter I've previously tried.

5. **As a player**, I want the game to end when:
   - I have correctly guessed all the letters in the word.
   - I have made six incorrect guesses.

6. **As a player**, after the game ends, I want to be informed if I have won or lost, and I want to see the answer (the word the computer picked).

---


## Setting up to play the game

In your local machine `git clone <this repo url>`

Then head to the directory by `cd hangman`
Open Visual Studio Code `code .`

In Visual Studio Code, open your terminal.

To download necessary node modules run `npm install --save readline-sync`

To start the game, run `node .` To end the game, press `ctrl + c`.

---

## Acknowledgments
Thank you to my wonderful teachers for helping me continue upskilling in the world of technology!
[Matina Patsos](https://github.com/matinaspatsos) and [Jamal Taylor](https://github.com/Louis345) 

