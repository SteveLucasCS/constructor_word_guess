var Letter = require('./letter.js');
function Word(str) {
  str = Array.from(str.toLowerCase());

  this.letters = [];
  for (var i = 0; i < str.length; i++) {
    this.letters[i] = new Letter(str[i]);
  }
}
Word.prototype.toString = function() {
  var str = "";
  for (var i = 0; i < this.letters.length; i++) {
    str = str.concat(' ', this.letters[i].toString());
  }
  return str;
}

Word.prototype.checkGuess = function(guess) {
  var flagWon = true;
  for(var i = 0; i < this.letters.length; i++) {
    this.letters[i].check(guess);
    if (letters[i].guessed === false)
      flagWon = false;
  }
  return flagWon;
}

module.exports = Word;