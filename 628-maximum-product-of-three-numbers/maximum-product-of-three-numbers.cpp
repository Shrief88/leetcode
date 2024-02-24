class Solution {
public:
    int maximumProduct(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        
        // all values are positive pr all values are negative
        if(nums[0] > -1){
            int len = nums.size();
            return nums[len-1] * nums[len-2] * nums[len-3];
        }

        // array contains postive and negative
        int len = nums.size();
        int max1 = nums[len-1] * nums[len-2] * nums[len-3];
        int max2 = nums[0] * nums[1] * nums[len-1];

        return max1 > max2 ? max1 : max2;
    }
};