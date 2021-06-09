function solve([arg1,arg2]){
    let money = parseFloat(arg1);
    let deathYear = parseInt(arg2);
    let age = 18;
    
    let costs = 0;
    
    for(let i = 1800; i<=deathYear; i++){
        if(i%2===0){
            costs+=12000;

        }else{
            costs+=(12000+50*age);
        }
        age++;
    }
    if(costs<=money){
        console.log("Yes! He will live a carefree life and will have "+(money-costs).toFixed(2)+" dollars left.");
    }else{
        console.log("He will need "+(costs-money).toFixed(2)+" dollars to survive.");
    }

}
solve(['50000','1802']);