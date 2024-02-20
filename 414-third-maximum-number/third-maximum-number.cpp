class Solution {
public:
    int thirdMax(vector<int>& nums) {
        set<int> set;
        for(int i=0;i<nums.size();i++){
            if(set.size()<3)
                set.insert(nums[i]);
            else{
                if(*set.begin()<nums[i] && set.find(nums[i]) == set.end()){
                    set.erase(set.begin());
                    set.insert(nums[i]);
                }
            }    
            
        }

        if(set.size()<3)
            return *set.rbegin();
        else
            return *set.begin();  
    }
};