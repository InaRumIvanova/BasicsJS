function solve(input){
    let sum = input[0];
    let num = 1;
    let finalSum = 0;

    while(finalSum<sum){
        let currentNum = Number(input[num]);
        finalSum+=currentNum;
        num++;
        
    }
    console.log(finalSum);
}
solve(["100",
"10",
"20",
"30",
"40"]);