/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const set = new Set();
    for(let i=0 ; i<nums.length ; i++){
        set.add(nums[i]);
    }

    let tmp;
    for(let i=0 ; i<nums.length+1 ; i++){
        if(!set.has(i)){
            tmp = i;
        }
    }

    return tmp;
};