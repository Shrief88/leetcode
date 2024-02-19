class Solution {
public:
    int lengthOfLastWord(string s) {
        int len = 0;
        bool endOfString = false;
        for(int i=s.length()-1; i>=0 ; i--){
            if(s[i] != ' ') endOfString = true;

            if(s[i] == ' ' && endOfString){
                break;
            }

            if(endOfString){
                len++;
            }
        }
        return len;
    }
};