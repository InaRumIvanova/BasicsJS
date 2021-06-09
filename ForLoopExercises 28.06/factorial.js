function solve(args){
    let n = Number(args);
    let fact=1;
    do{
        fact=fact*n;
        n--;
    }
    while(n>=1);
    console.log(fact);
}
solve(['8']);