function solve([arg1,arg2,arg3]){
let flowers = arg1;
let numFlowers = parseInt(arg2);
let budget = parseInt(arg3);
let finalPrice = 0;
if(flowers === "Roses"){
    finalPrice = numFlowers*5;
    if(numFlowers>80){
        finalPrice = finalPrice - finalPrice*0.1;
    }
    if(budget>=finalPrice){
        console.log("Hey, you have a great garden with "+ numFlowers + " " + flowers + " and " +Math.abs(budget-finalPrice).toFixed(2)+" leva left.");

    }else{
        console.log("Not enough money, you need "+Math.abs(finalPrice-budget).toFixed(2)+" leva more.");
    }
}

if(flowers === "Dahlias"){
    finalPrice = numFlowers*3.80;
    if(numFlowers>90){
        finalPrice = finalPrice - finalPrice*0.15;
    }
    if(budget>=finalPrice){
        console.log("Hey, you have a great garden with "+ numFlowers + " " + flowers + " and " +Math.abs(budget-finalPrice).toFixed(2)+" leva left.");

    }else{
        console.log("Not enough money, you need "+Math.abs(finalPrice-budget).toFixed(2)+" leva more.");
    }
}

if(flowers === "Tulips"){
    finalPrice = numFlowers*2.80;
    if(numFlowers>80){
        finalPrice = finalPrice - finalPrice*0.15;
    }
    if(budget>=finalPrice){
        console.log("Hey, you have a great garden with "+ numFlowers + " " + flowers + " and " +Math.abs(budget-finalPrice).toFixed(2)+" leva left.");

    }else{
        console.log("Not enough money, you need "+Math.abs(finalPrice-budget).toFixed(2)+" leva more.");
    }
}

if(flowers === "Narcissus"){
    finalPrice = numFlowers*3;
    if(numFlowers<120){
        finalPrice = finalPrice + finalPrice*0.15;
    }
    if(budget>=finalPrice){
        console.log("Hey, you have a great garden with "+ numFlowers + " " + flowers + " and " +Math.abs(budget-finalPrice).toFixed(2)+" leva left.");

    }else{
        console.log("Not enough money, you need "+Math.abs(finalPrice-budget).toFixed(2)+" leva more.");
    }
}

if(flowers === "Gladiolus"){
    finalPrice = numFlowers*2.50;
    if(numFlowers<80){
        finalPrice = finalPrice + finalPrice*0.2;
    }
    if(budget>=finalPrice){
        console.log("Hey, you have a great garden with "+ numFlowers + " " + flowers + " and " +Math.abs(budget-finalPrice).toFixed(2)+" leva left.");

    }else{
        console.log("Not enough money, you need "+Math.abs(finalPrice-budget).toFixed(2)+" leva more.");
    }
}


}
solve(['Roses','55','250']);