function solve(input){
    let moneyNeeded = Number(input[0]);
    let moneyAccount = Number(input[1]);
    let action = input[2];
    let actionCount = 0;
    let currentMoney = Number(input[3]);
    
    let index = 2;
    
    while(moneyNeeded<currentMoney){
        
        actionCount++;
        if(action === "Spend"){

            moneyAccount -= currentMoney;
            if(actionCount===5){
                console.log("You can't save the money.");
                console.log(actionCount);
                break;
            }
    index+=2;
    action = input[index];
    currentMoney = Number(input[index+1]);
        }
        
    }
    if(action === "Save"){
        moneyAccount+=currentMoney;
        console.log("You saved the money for "+ actionCount);
        
    }
    
}
solve(["2000",
"1000",
"spend",
"1200",
"save",
"2000"]);

