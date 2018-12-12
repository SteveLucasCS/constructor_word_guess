var Word = require('./word.js');
var prompt = require('prompt');
var gameOver = false;
var roundsLeft = 10;

word = new Word('arbitrary');
console.log(word.toString());

function promptUser() {
  var rules = {
    properties: {
      guess: {
        pattern: /[a-zA-Z]/,
        message: 'You Must Enter a Letter',
        required: true
      }
    }
  }
  prompt.start();
  prompt.get(rules, function(e, input) {
    if (e) throw(e);

    if (word.checkGuess(input.guess))  {
      gameOver = true;
      for (var i = 0; i < word.letters.length; i++) {
        if (!word.letters[i].guessed) {
          gameOver = false;
        }
      }
      if (gameOver) {
        console.log('You Win!');
      } else {
        console.log('Good Guess!');
        promptUser();
      }
    } else {
      console.log('Incorrect!');
      roundsLeft--;
      if (roundsLeft === 0)  {
        console.log('You Lose!');
      } else {
        console.log(`${roundsLeft} guesses left!`);
        promptUser();
      }
    }
    console.log(word.toString());
  });
}

promptUser();