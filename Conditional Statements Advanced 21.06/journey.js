function solve([arg1,arg2]){
    let budget = parseFloat(arg1);
    let season = arg2;
    let destination;
    let holiday;
    let costs = 0.0;
   
    if(budget<=100 ){
        destination = "Bulgaria";
        if(season === "summer"){
            holiday = "Camp";
            costs =  budget*0.3;
        }else{
        season = "winter";            
        holiday = "Hotel";
        costs =  budget*0.7;
        
    }
}
    if(budget>100 && budget<=1000){
        destination = "Balkans";
        if(season === "summer"){
            holiday = "Camp";
            costs = budget*0.4;
           
        }else{
            season = "winter";
            holiday = "Hotel";  
            costs = budget*0.8;
            
        }
    }
    if(budget>1000){
        destination = "Europe";
        if(season === "summer" || season === "winter"){
            holiday = "Hotel";
            costs = budget*0.9;
            
        }
    }
    console.log("Somewhere in "+destination);
    console.log(holiday + " - " + costs.toFixed(2));
}
solve(['50','summer']);
