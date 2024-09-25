const sumAll = function(startNum,endNum) {
    if(!Number.isInteger(startNum) || !Number.isInteger(endNum) || startNum < 0 || endNum < 0) return 'ERROR';
    if(startNum > endNum){
        let temporaryNum = startNum;
        startNum = endNum;
        endNum = temporaryNum;
    }
    let sumNum = 0;
        for(let i=startNum;i<=endNum;i++){
            sumNum += i;
        }
    return sumNum;
};

// Do not edit below this line
module.exports = sumAll;
