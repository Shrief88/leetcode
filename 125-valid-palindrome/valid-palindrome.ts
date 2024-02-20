function isPalindrome(s: string): boolean {
    let str = "";
    for (const char of s){
        if(char.match(/[a-zA-Z]/) || char.match(/[0-9]/)){
            str += char.toLowerCase();
        }
    }

    let r = 0;
    let l = str.length - 1;
    let flag = true;

    while(r<l){
        if(str[r] !== str[l]){
            flag = false;
            break;
        }else{
            r++;
            l--;
        }
    }

    return flag;
};