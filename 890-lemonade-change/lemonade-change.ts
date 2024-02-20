function lemonadeChange(bills: number[]): boolean {
    let fives = 0;
    let tens = 0;

    let canYouProvide = true;

    for(const bill of bills){
        if(bill === 5){
           fives++;
        }else if (bill === 10){
            if(fives === 0) {
                canYouProvide = false;
                break;
            }else{
                fives--;
                tens++; 
            }
        }else{
           if(fives === 0 || (fives < 3 && tens === 0)){
                canYouProvide = false;
                break;
           }

           if(tens === 0){
               fives -= 3;
           }else{
             tens--;
             fives--;
           }
           
        }
    }

    return canYouProvide;
};