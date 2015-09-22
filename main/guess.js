'use _strict';

function Guess ( answerGenerator , compareNumber ) {
  this.answer = answerGenerator.randernumber();
  this.comparenumber = compareNumber;
}

Guess.prototype.guess = function ( input ) {

  var result  = this.comparenumber.compare(input , this.answer);

  return result;
};

module.exports = Guess;
