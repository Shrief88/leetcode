/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let flag = false;
    const map = new Map();

    for(let i=0 ; i<nums.length ; i++){
        if(!map.has(nums[i])){
            map.set(nums[i],i);
        }else{
            const val = map.get(nums[i])
            if(Math.abs(i - val) <= k){
                flag = true;
                break;
            }else{
                // update the key
                map.set(nums[i],i);
            }
        }
    }

    return flag;
};