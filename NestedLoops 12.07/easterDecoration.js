function solve(input){
let numClients = Number(input.shift());
let average = 0;

for(let i = 1; i<= numClients; i++){
    let totalPrice = 0;
    let item = 0;
    let command;
    while ((command = input.shift()) !== 'Finish') {
        let currentItem = (command);
        if(currentItem === "basket"){
            totalPrice += 1.50;
            
        } if(currentItem === "wreath"){
            totalPrice += 3.80;
        
        } if(currentItem === "chocolate bunny"){
        totalPrice += 7;
        
        }
       item++;
    }
    if(item % 2 === 0){
        totalPrice -= totalPrice*0.20;
        console.log("You purchased "+item+" items for "+(totalPrice).toFixed(2)+" leva.");
        average += totalPrice;
    }else{
            console.log("You purchased "+item+" items for "+totalPrice.toFixed(2)+" leva.");
           average += totalPrice; 
        } 

}
console.log("Average bill per client is: "+(average/numClients).toFixed(2)+" leva.");
}
solve(['2','basket','wreath','chocolate bunny','Finish','wreath','chocolate bunny','Finish']);