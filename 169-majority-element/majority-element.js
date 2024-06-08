/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();

    for(let i=0; i<nums.length ; i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i]) + 1)
        }else{
            map.set(nums[i],1);
        }
    }

    let ans;
    map.forEach((value,key) => {
        if(value > nums.length / 2){
            ans = key
        }
    })

    return ans;
};