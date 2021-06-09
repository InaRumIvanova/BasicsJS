function solve(input){
    let name = input.shift();
    let win = 0;
    let lose = 0;
    let numGames = 0;

    while (name !== 'End of tournaments') {
        let num = Number(input.shift());  

        for(let i = 1; i<=num; i++){

            let teamOne = Number(input.shift());
            let teamTwo = Number(input.shift());
            numGames++; 

            if(teamOne>teamTwo){
                win++;
                console.log("Game "+i+" of tournament "+name+": win with "+(teamOne-teamTwo)+" points.");
            }else{
                lose++;
                console.log("Game "+i+" of tournament "+name+": lost with "+(teamTwo-teamOne)+" points.");
            }
        }

        name = input.shift();  
  
    }
    let numWinPercent = ((win/numGames)*100);
    let numLostPercent = ((lose/numGames)*100);
    console.log(numWinPercent.toFixed(2)+"% matches win");
    console.log(numLostPercent.toFixed(2)+"% matches lost");
    
}
solve(["Dunkers", 2, 75, 65, 56, 73, "Fire Girls", 3, 67, 34, 83, 98, 66, 45, "End of tournaments"]);