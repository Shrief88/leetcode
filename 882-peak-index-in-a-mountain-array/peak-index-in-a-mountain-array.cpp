class Solution {
public:
    int peakIndexInMountainArray(vector<int>& arr) {
        int index = 0;
        for(int i=1; i<arr.size() ; i++){
            if(arr[i] > arr[i-1]){
                index++;
            }else{
                break;
            }
        }
        return index;
    }
};