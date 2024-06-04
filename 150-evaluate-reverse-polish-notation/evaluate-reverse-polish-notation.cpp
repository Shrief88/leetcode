class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> s;
        for(int i=0;i<tokens.size();i++){
            if(tokens[i] != "+" && tokens[i] != "-" && tokens[i] != "/" && tokens[i] != "*")
                s.push(std::stoi(tokens[i]));
            else{
                int y = s.top();
                s.pop();
                int x = s.top();
                s.pop();
                if(tokens[i] == "+")
                    s.push(x+y);
                else if(tokens[i] == "-")
                    s.push(x-y);
                else if(tokens[i] == "*")
                    s.push(x*y);
                else
                    s.push(x/y);
            }
        }
        
        return s.top();
    }
};