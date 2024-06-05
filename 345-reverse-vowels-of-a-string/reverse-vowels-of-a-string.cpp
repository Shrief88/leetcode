class Solution {
public:
    bool isVowel(char c){
        if(c == 'a'|| c == 'e' || c == 'i' || c == 'o' || c == 'u' || 
        c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U'){
        return true;
        }
    return false;
    }
    
    string reverseVowels(string s) {
        int left = 0;
        int right = s.length();
        while (left < right){
        if(isVowel(s[left]) && isVowel(s[right])){
            swap(s[left],s[right]);
            left++;
            right--;
        }else if(isVowel(s[left]) || isVowel(s[right])){
            if(isVowel(s[left])){
                right--;
            }else{
                left++;
            }
        }else{
            left++;
            right--; 
        }
    }
    return s;

    }
};
