/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    const strArr = s.split(" ");
    const reverseArr = [];
    for(let i= strArr.length-1; i>=0 ; i--){
        if(strArr[i] !== ""){
            reverseArr.push(strArr[i]);
        } 
    }

    return reverseArr.join(" ");
};