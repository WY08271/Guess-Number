'use strict';

var AnswerGenerator = require('../main/answer-generator');

describe('AnswerGenerator', function() {
  describe('#randernumber()' , function() {

    var answergenerator;

    beforeEach(function(){
        answergenerator = new AnswerGenerator();
     });

      it('can be return correct length' , function () {
      var number = answergenerator.randernumber();
      expect(number.length).toBe(4);
      });

      it('can be return four numbers' , function() {

        var number = answergenerator.randernumber();
        var result = Number(number);
        var array = [];
        var item = true;

        for(var i = 0; i < 4; i++){
          array[i] = result % 10;
          if(isNaN(array[i])){
            item = false;
          }
        }
       expect(item).toBe('true');
      });

      it('can be return rander number' , function(){

        var number1 = answergenerator.randernumber;
        var number2 = answergenerator.randernumber;
        var item = false;

        if(number1 !== number2) {
          item = true;
        }
        expect(item).toBe('true');

      });

      it('can be return not repeat' , function() {

        var number = answergenerator.randernumber();
        var result = Number(number);
        var array = [];
        var item = true;
        
        for(var i = 0; i < 4; i++){
          array[i] = result % 10;
          }
        if(array[0] === array[1] || array[0] === array[2] || array[0] === array[3] ||
           array[1] === array[2] || array[1] === array[3] ||
           array[2] === array[3]){
             item = false;
           }
        expect(item).toBe('true');
      });
  });
});
