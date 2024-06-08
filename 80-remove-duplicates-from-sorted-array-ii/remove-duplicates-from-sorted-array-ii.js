/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k=1;

    if(nums[0] === nums[1]){
        k++;
    }

    for(let i=1 ; i<nums.length ; i++){
        if(nums[i] !== nums[i-1]){
            nums[k] = nums[i];
            k++;
            if(i !== nums.length-1 && nums[i+1] === nums[i]){
                nums[k] = nums[i];
                k++;
                i++;
            }
        }
    }

    return k;
};