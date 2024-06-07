/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let symbols = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    let sol = [];

    for(let i=0;i<values.length;i++){
        while(num >= values[i]){
            num = num - values[i];
            sol.push(symbols[i]);
        }
    }
    return sol.join("");
};