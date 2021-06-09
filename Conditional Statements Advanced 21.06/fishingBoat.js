function solve([arg1,arg2,arg3]){
    let budget = parseInt(arg1);
    let season = arg2;
    let numFisherman = parseInt(arg3);
    
    let rent = 0;

    if(season === "Spring"){
        rent = 3000;
    }else if(season === "Summer"){
        rent = 4200;
    
    }else if(season === "Autumn"){
        rent = 4200;
    }else if(season === "Winter"){
        rent = 2600;
    }

    if(season !== "Autumn" && numFisherman % 2 === 0){
        rent = rent - rent*0.05;
    }

    if(numFisherman<=6){
        rent = rent - rent*0.1;
    }else if(numFisherman>6 && numFisherman<=11){
        rent = rent - rent*0.15;
    }else if(numFisherman>12){
        rent = rent - rent*0.25;
    }

    if(rent<=budget){
        console.log("Yes! You have "+Math.abs(rent-budget).toFixed(2)+ " leva left.");
    }else{
        console.log("Not enough money! You need " +Math.abs(budget-rent).toFixed(2) +" leva.");
    }

}
solve(['3600','Autumn','6']);