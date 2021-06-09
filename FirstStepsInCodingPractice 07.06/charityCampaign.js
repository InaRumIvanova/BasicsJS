function solve([arg1,arg2,arg3,arg4,arg5]){
    let days = Number(arg1);
    let confectionerNum = Number(arg2);
    let cakes = Number(arg3);
    let waffels = Number(arg4);
    let pancakes = Number(arg5);
    let cakesTotal = cakes*45;
    let waffelsTotal = waffels*5.80;
    let pancakesTotal = pancakes*3.20;
    let profitOneDay = (cakesTotal+waffelsTotal+pancakesTotal)*confectionerNum;
    let profitTotal = profitOneDay*days;
    let expences = profitTotal/8;
    let profit = profitTotal-expences;
    console.log(profit);
}
solve(['23','8','14','30','16']);
