/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 
var groupAnagrams = function(strs) {
    const map = new Map();

    for(let i=0 ; i<strs.length ; i++){
        const sortedStr = strs[i].split("").sort().join("");
        if(map.has(sortedStr)){
            map.get(sortedStr).push(strs[i]);
        }else{
            map.set(sortedStr , [strs[i]]);
        }
    }

    const sol = [];

    map.forEach((value)=>{
        sol.push(value)
    })

    return sol;
};