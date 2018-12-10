var Word = require('./word.js');
var prompt = require('prompt');
var gameOver = false;
var round = 0;
const roundLimit = 10;

word = new Word('Test');
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

    gameOver = word.checkGuess(input.guess);
    console.log(word.toString());
    
    if (gameOver) {
      console.log('You Win!');
    } else if (round === roundLimit) {
      console.log('You Lost!');
    } else {
      round++;
      promptUser();
    }
  });
}

promptUser();