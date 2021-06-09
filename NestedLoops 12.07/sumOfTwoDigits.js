function solve([arg1,arg2,arg3]){
    let firstNum = Number(arg1);
    let lastNum = Number(arg2);
    let magicNum = Number(arg3);
    let count = 0;
    let product = 0;
    for(let i = firstNum; i <= lastNum; i++){
        for(let j = firstNum; j <= lastNum; j++){
            product = i + j;
            count++;
            if(product === magicNum){
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNum})`);
                return;
            }
        
    }
    
}
    //console.log(count);    
    console.log(`${count} combinations - neither equals ${magicNum}`);

}
solve(['1','10','5']);
//solve(['23','24','20']);
