function solve(arg){
    let n = Number(arg[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    let percent1 =0;
    let percent2 = 0;
    let percent3 =0;
    let percent4 =0;
    let percent5=0;
    for (let i = 1; i<=n; i++){
        let currentNumber = Number(arg[i]);
        if(currentNumber<200){
            p1++;
        

        }else if(currentNumber<400){
            p2++;

        }else if(currentNumber<600){
            p3++;
            
            }else if(currentNumber<800){
            p4++;
            
        }else {
            p5++;
            
        }
    }
    percent1 = (p1/n*100).toFixed(2);
    percent2 = (p2/n*100).toFixed(2);
    percent3 = (p3/n*100).toFixed(2);
     percent4 = (p4/n*100).toFixed(2);
     percent5 = (p5/n*100).toFixed(2);
    console.log(percent1);
    console.log(percent2);
    console.log(percent3);
    console.log(percent4);
    console.log(percent5);

}
solve(['3','1','2','999']);