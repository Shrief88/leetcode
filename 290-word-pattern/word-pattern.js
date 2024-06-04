/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map();
    const set = new Set();
    let flag = true;

    const words = s.split(" ")

    if(pattern.length !== words.length){
        return false;
    }

    for(let i=0 ; i<pattern.length; i++){
        if(!map.has(pattern[i])){
            if(set.has(words[i])){
                flag = false;
                break;
            }
            set.add(words[i]);
            map.set(pattern[i],words[i]);
        }else{
            if(map.get(pattern[i]) !== words[i] ){
                flag = false;
                break;
            }
        }
    }

    return flag;
};