function familyTrip(arg1, arg2, arg3, arg4) {
    let budget = Number(arg1);
    let nights = Number(arg2);
    let nightPrice = Number(arg3);
    let percent = Number(arg4);
    let price = 0;
    
 
    if (nights > 7) {
       price = nightPrice * 0.95;
    }else{
        price = nightPrice;
    }
    
    //percent = budget * 0.02;
    let totalMoney = (price)*nights + (percent/100)*budget;
 
    if (totalMoney <= budget) {
        console.log(`Ivanovi will be left with ${Math.abs(budget-totalMoney).toFixed(2)} leva after vacation.`);
    } else if(totalMoney>budget){
        console.log(`${Math.abs(budget - totalMoney).toFixed(2)} leva needed.`);
    }
}
 
familyTrip('500', '7', '66', '15');
familyTrip('800.50','8','100','2');