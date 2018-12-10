function Letter(char) {
  this.char = char;
  this.guessed = false;
  this.placeholder = '_';
}
Letter.prototype.check = function(guess) {
  guess === this.char ? this.guessed = true : this.guessed = false;
}
Letter.prototype.toString = function() {
  return this.guessed ? this.char : this.placeholder;
}
module.exports = Letter;