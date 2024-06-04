class Solution {
public:
    vector<int> sortArray(vector<int>& vec) {
        int max = vec[0];
        int min = vec[0];
        for(int i=1;i<vec.size(); i++){
            if(vec[i] > max)
                max = vec[i];
            if(vec[i] < min)
                min = vec[i];    
        }


        vector<int> countArray;
        int size = min >= 0 ? max +1 : max-min+1;
        countArray.resize(size);
        int shiftValue = 0 - min; 
        if (shiftValue < 0 )
            shiftValue = 0;

        for(int i=0;i<vec.size();i++){
            countArray[vec[i]+shiftValue]++;
        }
            

        for(int i=0, k=0;i<countArray.size();i++){
            if(countArray[i] > 0){
            for(int j=0;j<countArray[i]; j++,k++)
                vec[k] = i-shiftValue;
            }
        } 


        return vec;      
    }
};