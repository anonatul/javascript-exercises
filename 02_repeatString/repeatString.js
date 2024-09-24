const repeatString = function(str,num) {

    if(num < 0){
        return "ERROR";
    }
    let repeatdedString = "";
    for(let i = 0; i<num; i++){
        repeatdedString += str;
    }

    return repeatdedString;
};

// Do not edit below this line
module.exports = repeatString;
