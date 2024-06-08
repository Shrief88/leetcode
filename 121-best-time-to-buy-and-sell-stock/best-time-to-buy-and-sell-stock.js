/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minIndex = 0;
    let bestProfit = 0;
    let currentProfit = 0;

    for(let i=1 ;i<prices.length ; i++){
        if(prices[i] - prices[minIndex] > currentProfit){
           currentProfit = prices[i] - prices[minIndex];
            if(currentProfit > bestProfit){
                bestProfit = currentProfit;
            }
        }

        if(prices[i] < prices[minIndex]){
            minIndex = i;
        }
    }

    return bestProfit;
};