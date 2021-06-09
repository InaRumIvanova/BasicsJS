function solve([arg1,arg2,arg3]){
    let fuel = Number(arg1);
    let litersForOneTurn = Number(arg2);
    let roundsNum = parseInt(arg3);
    let roundsNeeded = Math.trunc(fuel/litersForOneTurn);
    let totalFuelNeeded = (litersForOneTurn)*roundsNum;
    for(i = 0; i <= roundsNum; i++){
        litersForOneTurn-=0.1;
        
    }
    
    if(totalFuelNeeded<=fuel){
        console.log("Congrats! You won the race!");
    }else{
        console.log("You are out of fuel in round " + roundsNeeded +"!");
    }

}
solve(['70','6.5','10']);