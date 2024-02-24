class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> set;
        for(int i=0; i< nums.size() ; i++){
            int oldSize = set.size();
            set.insert(nums[i]);
            if(set.size() == oldSize)
                return true;
        }
        return false;
    }
};