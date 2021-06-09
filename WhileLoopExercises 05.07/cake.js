function solve(input){
    let length = parseInt(input[0]);
    let width = parseInt(input[1]);
    let command = input;
    let totalNumPieces = width*length;
    let pieceTaken = 0;
    let index = 2;
    while(pieceTaken < totalNumPieces){
        let currentNumPieces = Number(input[index]);       
        if(command === "STOP"){
            console.log(Math.abs(pieceTaken-totalNumPieces)+" pieces are left.");
            break;
    }
    
    index++;
    pieceTaken+=currentNumPieces;
    command = input[index];

}
 command = Number(input.shift[index]);
if(command!=="STOP" && totalNumPieces<=pieceTaken){
    console.log("No more cake left! You need "+Math.abs(pieceTaken-totalNumPieces) + " pieces more.");

}
}
solve(["10",
"10",
"20",
"20",
"20",
"20",
"21"]);





