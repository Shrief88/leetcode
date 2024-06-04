/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();
    let lengthOfLastWord = 0;

    for(let i= s.length -1 ; (i >= 0 && s[i] !== ' ') ; i--){
        lengthOfLastWord++;
    }

    return lengthOfLastWord;
};