/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let l = 0;
    let r = num;

    while(l<=r){
        let middle = Math.floor((l+r)/2);
        if(middle*middle < num){
            l = middle + 1;
        }else{
            r = middle - 1;
        }
    }

    return l*l === num ;
};