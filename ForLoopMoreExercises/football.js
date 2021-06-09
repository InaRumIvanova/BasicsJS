function solve(input){
    let capacityStadium = Number(input.shift([0]));
    let numFans = Number(input.shift([1]));
    
    let fanA = 0;
    let fanB = 0;
    let fanG = 0;
    let fanV = 0;
    let percentA = 0;
    let percentB = 0;
    let percentG = 0;
    let percentV = 0;

    let percentCapacity = 0;
    for(let i = 0; i<=numFans; i++){
    let sector = (input.shift([i]));
        if(sector === "A"){
            fanA++;
        }
        if(sector === "B"){
            fanB++;
        }
        if(sector === "G"){
            fanG++;
        }
        if(sector === "V"){
            fanV++;
        }
        
    }
    percentA = fanA/numFans*100;
        percentB = fanB/numFans*100;
        percentG = fanG/numFans*100;
        percentV = fanV/numFans*100;
        percentCapacity = numFans/capacityStadium*100;
    console.log(percentA.toFixed(2) + "%");
    console.log(percentB.toFixed(2) + "%");
    console.log(percentV.toFixed(2) + "%");
    console.log(percentG.toFixed(2) + "%");
    console.log(percentCapacity.toFixed(2) + "%");
}
solve(['76','10','A','V','V','V','G','B','A','V','B','B']);