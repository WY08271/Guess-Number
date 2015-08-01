'use strict';

function Guess ( answerGenerator , compareNumber ) {
  this.answer = answerGenerator.randomnumber();
  this.comparenumber = compareNumber;
}

Guess.prototype.guess = function ( input ) {
  
  var result  = this.comparenumber.compare(input , this.answer);

  return result;
};

module.exports = Guess;
