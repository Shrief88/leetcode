/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const sol = Array.from({length : nums.length } , () => 0);

    for(let i=0;i<nums.length ; i++){
        let newIndex = (i+k)%nums.length;
        sol[newIndex] = nums[i];
    }

    for(let i=0; i<nums.length;i++){
        nums[i] = sol[i];
    }


};