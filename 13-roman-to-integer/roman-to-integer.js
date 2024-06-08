/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const sol = [];


    for(let i=0 ; i<s.length ; i++){
        if(s[i] === 'I' && s[i] !== s.length-1){
            if(s[i+1] === "X"){
                sol.push(9);
                i++;
            }
            else if(s[i+1] === 'V'){
                sol.push(4);
                i++;
            }else{
                sol.push(1);
            }
        }else if(s[i] === 'X' && s[i] !== s.length-1){
            if(s[i+1] === "C"){
                sol.push(90);
                i++;
            }
            else if(s[i+1] === 'L'){
                sol.push(40);
                i++;
            }else{
                sol.push(10)
            }
        }else if(s[i] === 'C' && s[i] !== s.length-1){
            if(s[i+1] === "M"){
                sol.push(900);
                i++
            }
            else if(s[i+1] === 'D'){
                sol.push(400);
                i++;
            }else{
                sol.push(100);
            }
        }else if(s[i] === 'V'){
            sol.push(5);
        }else if(s[i] === 'L'){
            sol.push(50);
        }else if (s[i] === 'M'){
            sol.push(1000);
        }else{
            sol.push(500);
        }
    }

    let sum =0;
    for(let i=0; i<sol.length ; i++){
        sum += sol[i];
    }

    console.log(sol);
    return sum;
};