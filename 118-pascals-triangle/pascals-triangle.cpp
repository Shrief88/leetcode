class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        vector<vector<int>> vec;
        vec.push_back({1});
        for(int i=1 ; i < numRows ; i++){
            vector<int> tmp;
            tmp.push_back(1);
            for(int j=0;j<vec[i-1].size()-1;j++){
                int val = vec[i-1][j] + vec[i-1][j+1];
                tmp.push_back(val);
            }
            tmp.push_back(1);
            vec.push_back(tmp);
        }
       return vec;
    }
};