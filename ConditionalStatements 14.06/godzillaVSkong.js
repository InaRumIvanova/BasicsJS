function solve([arg1,arg2,arg3]){
    let budgetMovie = parseFloat(arg1);
    let peopleNum = parseInt(arg2);
    let priceClothes = parseFloat(arg3);
    let decorationPrice = budgetMovie*0.1;
    let discount =  (priceClothes*0.1)*peopleNum;
    let total = (priceClothes*peopleNum+decorationPrice);
    if(peopleNum>150){
        total-=discount;
        
    }
    
    if(total > budgetMovie){
        console.log("Not enough money!");
        console.log("Wingard needs "+Math.abs(budgetMovie-total).toFixed(2)+" leva more.");
    }else{
        console.log("Action!");
        console.log("Wingard starts filming with "+Math.abs(budgetMovie-total).toFixed(2)+" leva left.");

    }
}
solve(['9587.88','222','55.68']);