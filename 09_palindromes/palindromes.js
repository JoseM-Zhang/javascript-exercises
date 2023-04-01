const palindromes = function (str) {
    let newstr = str.toLowerCase()
                    .replace(/[^a-z0-9]/g, '');
    let reverseArray = newstr.split('')
                             .reverse()
                             .join('');
        
    for (let i = 0; i<newstr.length; i++){
        if (newstr[i] !== reverseArray[i])
            return false;
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
