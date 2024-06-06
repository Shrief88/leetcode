/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0;
    let r = x;

    while(l<=r){
        let mid = Math.floor((l+r)/2);

        if(mid*mid < x){
            l = mid + 1;
        }else{
            r = mid - 1;
        }
    }

    return l*l === x ? l : l-1;
};