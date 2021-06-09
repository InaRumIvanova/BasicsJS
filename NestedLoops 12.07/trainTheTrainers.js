function solve(input){
    const n = Number(input[0]);
    let presentation = input[1];
    let index = 1;
    let totalSum = 0;
    let count =0;
    while(presentation !== 'Finish'){
        count++;
        let sum = 0;
        for(let i = 1; i<=n;i++){
            index++;
            sum+= Number(input[index]);
        }
        let avg = sum/n;
        console.log(presentation+" - "+avg.toFixed(2)+".");
        totalSum+=avg;
        index++;
        presentation = input[index];
    }
    let totalAvg = totalSum/count;
    console.log("Student's final assessment is " + totalAvg.toFixed(2)+".");
}