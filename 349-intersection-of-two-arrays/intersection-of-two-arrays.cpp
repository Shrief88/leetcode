class Solution {
public:
    vector<int> intersection(vector<int>& nums1, vector<int>& nums2) {
        unordered_set<int> set;
        for(int i=0;i<nums1.size();i++)
            set.insert(nums1[i]);

        vector<int> sol;
        for(int i=0;i<nums2.size();i++){
            if(set.find(nums2[i]) != set.end()){
                sol.push_back(nums2[i]);
                set.erase(nums2[i]);
            }
            
        }
        return sol;
    }
};