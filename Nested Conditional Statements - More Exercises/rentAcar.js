function solve([arg1,arg2]){
let budget = Number(arg1);
let season = arg2;
let price = 0;
if(budget<=100){
    if(season === "Summer"){
        price = budget*0.35;
        console.log("Economy class");
        console.log("Cabrio - "+ price.toFixed(2));
    }
    if(season === "Winter"){
        price = budget*0.65;
        console.log("Economy class");
        console.log("Jeep - "+price.toFixed(2));
    }
}
if(budget>100 && budget<=500){
    if(season === "Summer"){
        price = budget*0.45;
        console.log("Compact class");
        console.log("Cabrio - "+ price.toFixed(2));
    }
    if(season === "Winter"){
        price = budget*0.80;
        console.log("Compact class");
        console.log("Jeep - "+price.toFixed(2));
    }
}
if(budget>500){
    price = budget*0.90;
    console.log("Luxury class");
    console.log("Jeep - "+price.toFixed(2));
}


}
solve(['450','Summer']);