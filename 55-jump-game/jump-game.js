/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let reachable = 0;
    for(let i=0;i<nums.length ; i++){
        if(i>reachable) return false;
        reachable = Math.max(reachable,nums[i] + i);
    }

    return true;
};