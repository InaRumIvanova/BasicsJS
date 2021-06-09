function flowers(arg1, arg2, arg3, arg4, arg5) {
    let magnoliasCount = Number(arg1);
    let hyathinthusCount = Number(arg2);
    let rosesCount = Number(arg3);
    let cactiCount = Number(arg4);
    let price = Number(arg5);
 
    let magnoliasPrice = magnoliasCount * 3.25;
    let hyathinthusPrice = hyathinthusCount * 4;
    let rosesPrice = rosesCount * 3.5;
    let cactiPrice = cactiCount * 8;
    let totalPrice = magnoliasPrice + hyathinthusPrice + rosesPrice + cactiPrice;
    let taxes = totalPrice * 0.05;
    let profit = totalPrice - taxes;
    let money = 0;
    let totalProfit = money - profit;
 
    if (profit>=price) {
        console.log(`She is left with ${(Math.floor)(profit-price)} leva.`);
        
    } else {
        console.log(`She will have to borrow ${(Math.abs)((Math.ceil)(price-profit))} leva.`);
    }
}
flowers('2','3','5','1','50');