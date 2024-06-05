/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let curLongest = 0;
    let bestLongest = 0 ;
    let i = 0;
    let j = 0;

    for(;i<s.length ; i++){
        if(!map.has(s[i]) || map.get(s[i]) < j){
            map.set(s[i],i);
            curLongest++;
        }else{
            if(curLongest > bestLongest){
                bestLongest = curLongest;
            }

            j = map.get(s[i]) + 1;
            map.set(s[i],i);
            curLongest = (i-j) + 1;
        }
    }
    
    return Math.max(curLongest,bestLongest);
};