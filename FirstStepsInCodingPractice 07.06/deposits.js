function solve([arg1,arg2,arg3]){
    let deposit = parseFloat(arg1);
    let depositLenght = parseInt(arg2);
    let annualPercent = parseFloat(arg3);
    let interest = (deposit*annualPercent)/100;
    let interestMonth = interest/12;
    let totalSum = deposit+(depositLenght*interestMonth);
    console.log(totalSum);
}
solve(['200','3','5.7']);