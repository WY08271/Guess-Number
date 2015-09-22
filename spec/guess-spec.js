'use _strict';

var Guess = require('../main/guess');
var AnswerGenerator = require('../main/answer-generator');
var CompareNumber = require('../main/compare-number');

describe('Guess', function() {
  describe('#guessnumber()', function() {

    var answergenerator = new AnswerGenerator();
    var comparenumber = new CompareNumber();

    it('shoule be return 2A2B', function() {
      spyOn(answergenerator, 'randomnumber').and.returnValue('1243');
      spyOn(comparenumber, 'compare').and.callFake(function(input, answer) {
        if (input === '1234' && answer === '1243') {
          return '2A2B';
        }
      });

      var guessresult = new Guess(answergenerator, comparenumber);
      var result = guessresult.guess('1234');

      expect(result).toBe('2A2B');
    });
  });
});
