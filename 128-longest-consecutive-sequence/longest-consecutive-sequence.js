/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return 0;
    }

    let set = new Set();

    for(let i=0;i<nums.length ; i++){
        set.add(nums[i]);
    }

    let curLongest = 1;
    let bestLongest = 1;
    let starterPoints = new Set();

    for(let i=0;i<nums.length ; i++){
        if(set.has(nums[i] + 1) && !set.has(nums[i] -1)){
            starterPoints.add(i);
        } 
    }

    starterPoints.forEach(point => {
        let j = 1;
        while(set.has(nums[point] + j)){
            curLongest++;
            j++;
        }
        if(curLongest > bestLongest){
            bestLongest = curLongest;
        }
        curLongest = 1;
    })

    return bestLongest;
};