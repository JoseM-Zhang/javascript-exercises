const sumAll = function(firstNum, secondNum) {
    let counter = 0;
    if(typeof firstNum !== 'number' || typeof secondNum !== 'number')
        return 'ERROR';
    if(firstNum < 0 || secondNum < 0)
        return 'ERROR';
    if(firstNum > secondNum){
        for(secondNum; secondNum<=firstNum; secondNum++){
            counter += secondNum;
        }
    }
    else {
        for(firstNum; firstNum<=secondNum; firstNum++){
            counter += firstNum;
        }
    }
    return counter;
};

// Do not edit below this line
module.exports = sumAll;
