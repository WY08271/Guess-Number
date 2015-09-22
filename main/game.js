'use _strict';

var readline = require('readline');

function Game(answerGenerator, guess) {
  this.answer = answerGenerator.randernumber();
  this.guess = guess.guess();
}

Game.prototype.gameBegin = function() {
  console.log("Welcome!\n\n");
};

Game.prototype.gamePersist = function(i) {

  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  var string = 'Please input your number(' + i + '):';

  rl.question('string', function(answer) {
    var result = guess(answer);
    console.log(result);
    console.log('\n');
    rl.close();
  });
};

Game.prototype.gameResult = function(i ) {
  if(i === 6){
    console.log("Game over!");
  }else{
    console.log("Congratulations!");
  }
};

module.exports = Game;
