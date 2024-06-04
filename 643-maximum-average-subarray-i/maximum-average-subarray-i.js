/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let sum = 0;
    for(let i=0; i<k ; i++){
        sum += nums[i];
    }

    let curMax = sum/k; 
    let bestMax = sum/k;

    for(let i=k ; i<nums.length ;i++){
        sum = sum - nums[i-k] + nums[i];
        curMax = sum/k;
        if(curMax > bestMax){
            bestMax = curMax;
        }
    }

    return bestMax;
};