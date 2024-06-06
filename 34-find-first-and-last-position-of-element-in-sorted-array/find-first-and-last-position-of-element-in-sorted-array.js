/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const lowerBound = (nums,target) => {
    let l = 0;
    let r = nums.length - 1;

    while(l <= r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid] < target){
            l = mid +1;
        }else{
            r = mid - 1;
        }
    }

    return nums[l] === target ? l : -1;
}

const upperBound = (nums,target) => {
    let l = 0;
    let r = nums.length - 1;

    while(l <= r){
        let mid = Math.floor((l+r)/2);
        if(nums[mid] <= target){
            l = mid +1;
        }else{
            r = mid - 1;
        }
    }

    return nums[l-1] === target ? l-1 : -1;
}

var searchRange = function(nums, target) {
    const sol = [];
    sol.push(lowerBound(nums,target));
    sol.push(upperBound(nums,target));

    return sol;
};