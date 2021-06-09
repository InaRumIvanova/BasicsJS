function solve([arg1,arg2,arg3]){
    let N = parseInt(arg1);
    let M = parseInt(arg2);
    let S = parseInt(arg3);
    
    let g = "";

    for (let i = M; i >= N; i--){

        if(M<=10000 && M>N){
        if(i % 2 === 0 && i % 3 === 0){
            if(i === S){
                break;
            }
            g += i + " ";
        
        }
    } 
    }
    console.log(g);

}
//solve(['1','30','15']);
//solve(['1','36','12']);
solve(['20','1000','36']);