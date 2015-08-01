'use strict';

function CompareNumber() {

}

CompareNumber.prototype.compare = function(input,answer) {

    var A = 0;
    var B = 0;
    
    for(var i = 0; i < input.length; i++) {
        if(input[i] === answer[i]) {
            A++;
        }else if(answer.indexOf(input[i]) !== -1) {
            B++;
        }
    }
    return A + 'A' + B + 'B';
};

module.exports = CompareNumber;
