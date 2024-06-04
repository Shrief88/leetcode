class Solution {
public:
    bool backspaceCompare(string s, string t) {
        stack<char> s1;
        stack<char> s2;
        
        for(int i=0;i<s.length();i++){
            if(s[i]!='#')
                s1.push(s[i]);
            else
                if(!s1.empty())
                    s1.pop();
        }
        
         for(int i=0;i<t.length();i++){
            if(t[i]!='#')
                s2.push(t[i]);
            else
                if(!s2.empty())
                    s2.pop();
        }
        
    
        if(s1.size() != s2.size()){
            return false;
        }

        int size = s1.size();
        for(int i=0;i<size ;i++){
            if(s1.top() != s2.top()){
                return false;
            }
            s2.pop();
            s1.pop();
        }
        
        return true;
    }
};