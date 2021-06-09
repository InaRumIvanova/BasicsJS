function solve([arg1,arg2,arg3]){
let budget = parseFloat(arg1);
let typeTicket = arg2;
let peopleInGroup = Number(arg3);
let transport = 0 ;
let ticketPrice = 0;
let total = 0;

if(peopleInGroup>=1 && peopleInGroup<=4){
    transport = budget*0.75;
  
}
if(peopleInGroup>=5 && peopleInGroup<=9){
    transport = budget*0.60;
    
}
if(peopleInGroup>=10 && peopleInGroup<=24){
    transport = budget*0.50;
}
if(peopleInGroup>=25 && peopleInGroup<=49){
    transport =  budget*0.40;
    
}
if(peopleInGroup>=50){
    transport = budget*0.25;

}
if(typeTicket === "Normal"){
     ticketPrice = peopleInGroup*249.99;

}else{
     ticketPrice = peopleInGroup*499.99;

}
total = transport + ticketPrice;
if(total<=budget){
    console.log("Yes! You have "+(budget - total).toFixed(2)+" leva left.");
}if(total>budget){
    console.log("Not enough money! You need "+(total - budget).toFixed(2)+" leva.");
}
}
solve(['1000','Normal','1']);