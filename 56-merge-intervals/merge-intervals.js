/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

const checkOverLapping = (interval1, interval2) => {
    if(interval2[0] >= interval1[0] && interval2[0] <= interval1[1]){
        return true;
    }
}

var merge = function(intervals) {
    intervals.sort((a,b) => {
        return a[0] - b[0]
    })

    const sol = [intervals[0]];

    for(let i = 1, j = 0 ; i<intervals.length ; i++){
        if(checkOverLapping(sol[j],intervals[i])){
            const x = sol[j];
            const y = intervals[i];

            if(y[1] > x[1]){
                sol[j] = [x[0],y[1]];
            }
        }else{
            sol.push(intervals[i]);
            j++;
        }
    }

    return sol;
};