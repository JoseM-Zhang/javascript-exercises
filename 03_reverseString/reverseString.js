const reverseString = function(inputString) {
    let tempArray = Array.from(inputString);
    tempArray = tempArray.reverse();
    tempArray = tempArray.join('');
    return tempArray;
}

// Do not edit below this line
module.exports = reverseString;
