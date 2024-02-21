class Solution {
public:
    bool judgeCircle(string moves) {
        int upCounter = 0;
        int rightCounter = 0;

        for(int i=0;i<moves.length();i++){
            if(moves[i] == 'U') upCounter++;
            else if(moves[i] == 'D') upCounter--;
            else if(moves[i] == 'R') rightCounter++;
            else rightCounter--;
        }

        return (upCounter == 0 && rightCounter == 0);
    }
};