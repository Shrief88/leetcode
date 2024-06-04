/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map();
    const sol = []

    for(let i =0 ; i<nums.length ; i++){
        map.set(nums[i],i);
    }

    for(let i=0; i<nums.length; i++){
        if(map.has(target-nums[i]) && map.get(target-nums[i]) !== i){
            sol.push(i);
            sol.push(map.get(target-nums[i]));
            break;
        }
    }

    return sol;
};