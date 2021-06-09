function solve(){
    let input = [...arguments];
    let startingPoints = 301;
    let totalPoints = 0;
    let name = input.shift();
    let shots = 0;
    let unsuccesfullShot = 0;
    let command;

    while(((command = input.shift()) !== "Retire") && startingPoints!==0){
        let currentArea = (command);
        let currentPoints = Number(input.shift());

        if(currentArea === "Single"){
            totalPoints = currentPoints*1;
            if(totalPoints<=startingPoints){
            shots++;
            startingPoints -= totalPoints;
            }else{
                unsuccesfullShot++;
            }
            
        }
        if(currentArea === "Double"){
            totalPoints = currentPoints*2;
            if(totalPoints<=startingPoints){
            shots++;
            startingPoints -= totalPoints;
            }else{
                unsuccesfullShot++;
            }
            
        } if(currentArea === "Triple"){
            totalPoints = currentPoints*3;
            if(totalPoints<=startingPoints){
            shots++;
            startingPoints -= totalPoints;
            }else{
                unsuccesfullShot++;
            }
            
        }
        if(startingPoints === 0){
            break;
        }
    }

    
    if(startingPoints === 0){
        console.log(name + " won the leg with "+shots + " shots.");
       
    }else{
        console.log(name+" retired after "+unsuccesfullShot+" unsuccessful shots.");
    }
   
}

solve('Michael van Gerwen','Triple','20','Triple','19','Double','10','Single','3','Single','1','Triple','20','Triple','20','Double','20');