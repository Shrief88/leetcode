/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0;
    }

    let map = new Map();

    for(let i=0;i<nums.length ; i++){
        map.set(nums[i],i);
    }

    let curLongest = 1;
    let bestLongest = 1;
    let set = new Set();

    for(let i=0 ; i<nums.length ; i++){
        if(map.has(nums[i] + 1) && !map.has(nums[i] -1)){
            set.add(i);
        }
    }

    let starterPoints = [...set];

    for(let i = 0 ; i<starterPoints.length ; i++){
        let j = 1;
        while(map.has(nums[starterPoints[i]] + j)){
            curLongest++;
            j++;
        }
        if(curLongest > bestLongest){
            bestLongest = curLongest;
        }
        curLongest = 1;
    }

    return bestLongest;
};