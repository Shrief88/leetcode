/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums.sort((a,b) => {
        const x = [a,b].join("");
        const y = [b,a].join("");
        return Number(y) - Number(x);
    })

    if(nums[0] === 0){
        return "0";
    }

    return nums.join("");
};