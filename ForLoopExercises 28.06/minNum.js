function solve(input){
    let n = parseInt(input.shift([0]));
    let min = Number(input.shift());
    for(let i = 1; i<=n; i++){
        let currentNum = Number(input.shift([i]));
        if(currentNum<min){
            min=currentNum;
        }
    
    }
    console.log(Math.min(min));
}
solve(['3','-10','20','-30']);