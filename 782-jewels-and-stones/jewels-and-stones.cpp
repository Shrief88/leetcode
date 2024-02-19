class Solution {
public:
    int numJewelsInStones(string jewels, string stones) {
        int counter=0;
        unordered_set<char> set;
        for(int i=0;i<jewels.length();i++) set.insert(jewels[i]);

        for(int i=0;i<stones.length();i++){
            if(set.find(stones[i]) != set.end()){
                counter++;
            }
        }
        return counter;
    }
};