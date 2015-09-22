'use _strict';

var Guess = require('../main/guess');
var AnswerGenerator = require('../main/answer-generator');
var CompareNumber = require('../main/compare-number');

describe('Guess', function() {
  describe('#guessnumber', function() {

    it('shoule be run guess', function() {

      var answergenerator = new AnswerGenerator();
      var comparenumber = new CompareNumber();

      spyOn(answergenerator, 'randernumber').and.returnValue('1243');
      var guessnumber = new Guess(answergenerator, comparenumber);
      var result = guessnumber.guess('1234');

      expect(result).toBe('2A2B');
    });
  });
});
