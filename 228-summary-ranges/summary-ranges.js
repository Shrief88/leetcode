/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const sol = [];
    let ptr = 0;

    for(let i=1;i<nums.length ; i++){
        if(nums[i] - nums[i-1] !== 1){
            if(i - ptr === 1){
                sol.push(`${nums[ptr]}`);
                ptr = i;
            }else{
                sol.push(`${nums[ptr]}->${nums[i-1]}`);
                ptr = i;
            }
        }
    }

    if(ptr < nums.length){
        if(nums.length - ptr === 1){
            sol.push(`${nums[ptr]}`);
        }else{
            sol.push(`${nums[ptr]}->${nums[nums.length-1]}`);
        }
    }

    return sol;
};