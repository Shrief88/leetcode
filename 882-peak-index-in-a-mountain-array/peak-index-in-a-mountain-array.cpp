class Solution {
public:
    int peakIndexInMountainArray(vector<int>& arr) {
        int r = 0;
        int l = arr.size() -1;
        
        while(r<l){
            int middle = (l+r)/2;
            if(arr[middle] > arr[middle +1]){
                l = middle;
            }else{
                r = middle + 1;
            }
        }

        return l;

        // // for(int i=1; i<arr.size() ; i++){
        // //     if(arr[i] > arr[i-1]){
        // //         index++;
        // //     }else{
        // //         break;
        // //     }
        // // }
        // return index;
    }
};