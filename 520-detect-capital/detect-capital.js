/**
 * @param {string} word
 * @return {boolean}
 */

const isUpperCase = (char) => char === char.toUpperCase()

var detectCapitalUse = function(word) {
    let capitalCount = 0;
    let smallCount = 0; 
    let flag = false;

    for(let i=0;i<word.length ; i++){
        isUpperCase(word[i]) ? capitalCount++ : smallCount++;
    }

    if(capitalCount === word.length || smallCount === word.length || 
    (capitalCount  === 1 && isUpperCase(word[0]))){
        flag = true;
    }

    return flag;
};