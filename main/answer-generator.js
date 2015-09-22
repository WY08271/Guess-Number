'use _strict';

function AnswerGenerator() {
}

AnswerGenerator.prototype.randernumber = function() {

  var result = '';

  for(var i = 0;i < 4 ; i++){

    var number = 0;

    number = parseInt ( Math.random() * 10 );
    if(result.indexOf( number) === -1){
      result += number;
    }else {
      number = parseInt( Math.random() * 10 );
      result += number;
    }
  }
  return result;
};

module.exports = AnswerGenerator;
