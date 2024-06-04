/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function(pairs) {
    pairs.sort((a,b)=>{
        return a[1] - b[1];
    })

    let chainPairs = [pairs[0]];
    for(let i =1,j=0 ;i < pairs.length ; i++){
        if(chainPairs[j][1] < pairs[i][0]){
            chainPairs.push(pairs[i]);
            j++;
        }
    }

    return chainPairs.length;
};