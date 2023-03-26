const repeatString = function(inputString, times) {
    let outputString = '';
    if(times<0)
        return 'ERROR';
    for (let i =0; i<times; i++){
        outputString += inputString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
