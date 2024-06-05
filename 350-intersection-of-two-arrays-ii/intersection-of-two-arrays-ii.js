/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map1 = new Map();
    const map2 = new Map();

    for(let i=0;i<nums1.length ; i++){
        if(map1.has(nums1[i])){
            map1.set(nums1[i],map1.get(nums1[i]) + 1)
        }else{
            map1.set(nums1[i],1);
        }
    }

    for(let i=0;i<nums2.length ; i++){
        if(map2.has(nums2[i])){
            map2.set(nums2[i],map2.get(nums2[i]) + 1)
        }else{
            map2.set(nums2[i],1);
        }
    }

    const sol = [];

    map1.forEach((value,key) => {
        if(map2.has(key)){
            let k = Math.min(value,map2.get(key));
            for (let i = 0; i<k ; i++){
                sol.push(key);
            }
        }
    })

    return sol;
};