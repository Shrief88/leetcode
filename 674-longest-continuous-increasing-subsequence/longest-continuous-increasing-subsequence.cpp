class Solution {
public:
    int findLengthOfLCIS(vector<int>& nums) {
        int counter = 1; 
        int maxCounter = 1;
        for(int i=1; i < nums.size() ; i++){
            if( nums[i] > nums[i-1]){
                counter++ ;
            }else{
                if(counter > maxCounter){
                    maxCounter = counter;
                }
                counter = 1;
            }
        }

        if(counter > maxCounter){
            maxCounter = counter;
        }

        return maxCounter;
    }
};