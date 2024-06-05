class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int left = 0;
        int right = numbers.size() - 1;
        vector<int> sol;

        while(left < right){
            if(numbers[left]+numbers[right] > target){
                right--;
            }else if(numbers[left]+numbers[right] < target){
                left++;
            }else{
                sol.push_back(left+1);
                sol.push_back(right+1);
                break;  
            }
        }

        return sol;
    }
};