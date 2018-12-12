function Letter(char) {
  this.char = char;
  this.guessed = false;
  this.placeholder = '_';
}
Letter.prototype.check = function(guess) {
  if (guess === this.char)
    this.guessed = true;
  return true;
}
Letter.prototype.toString = function() {
  return this.guessed ? this.char : this.placeholder;
}
module.exports = Letter;