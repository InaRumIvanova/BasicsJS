function coffee(input){
    let numOrders = Number(input[0]);
    let price = Number(input[1]);
    let days = Number(input[2]);
    let countCapsules = Number(input[3]);
    let index = 1;
    let sum=0;
    while(index<input.length){
        let currenPrice = Number(price);
        let currentDays = Number(days);
        let currentCount = Number(countCapsules);
        
            sum = currenPrice*currentCount*currentDays;
        
        index+=3;
        
    }
    console.log(`The price for the coffee is: $${sum.toFixed(2)}`);
    console.log(`Total: $${sum.toFixed(2)}`);
    
}
//coffee([1,1.53,30,8]);
coffee([2,4.99,31,3,0.35,31, 5]);
    
    