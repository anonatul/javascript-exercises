const reverseString = function(string) {

    let reversedString = "";
    const lengthOfString = (string.length - 1);

    for(let i=lengthOfString;i>=0;i--){
        reversedString += string[i];
    }
    
    return reversedString; 
};

// Do not edit below this line
module.exports = reverseString;
