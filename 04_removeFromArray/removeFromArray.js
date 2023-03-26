const removeFromArray = function(inputArray, ...args) {
    return inputArray.filter(numbers => !args.includes(numbers));
};

// Do not edit below this line
module.exports = removeFromArray;
