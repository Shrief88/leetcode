/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let r = 0;
    let l = s.length - 1;

    while (r<l){
        let tmp = s[r];
        s[r] = s[l];
        s[l] = tmp;
        r++;
        l--;
    }
};