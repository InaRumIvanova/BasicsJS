function solve(input){
let numCargo = parseInt(input.shift([0]));
//let ton = parseInt(input[1]);
let num = 0;
let ton = 0;
let numBus = 0;
let numTruck = 0;
let numTrain = 0;

let sum = 0;
let percentMicrobus = 0;
let percentTruck = 0;
let percentTrain = 0;
for(let i = 0; i<=numCargo; i++){
    let currentCargo = Number(input.shift([i]));
    if(currentCargo<=3){
        ton = currentCargo*200;
    
        sum+=ton;
        numBus+=currentCargo;

    }
    if(currentCargo>=4 && currentCargo<=11){
        ton = currentCargo*175;
        
        sum+=ton;
        numTruck+=currentCargo;

        
    }
    if(currentCargo>=12){
        ton = currentCargo*120;
    
        sum+=ton;
        numTrain+=currentCargo;

    }


    
}
num = numBus+numTruck+numTrain;
percentMicrobus = (numBus/num)*100;
percentTruck = (numTruck/num)*100;
percentTrain = (numTrain/num)*100;



console.log((sum/num).toFixed(2));
console.log(percentMicrobus.toFixed(2)+"%");
console.log(percentTruck.toFixed(2)+"%");
console.log(percentTrain.toFixed(2)+"%");
}
solve(['4','1','5','16','3']);