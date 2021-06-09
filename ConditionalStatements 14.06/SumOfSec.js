function solve([arg1,arg2,arg3]){
    let finishOne = parseInt(arg1);
    let finishTwo = parseInt(arg2);
    let finishThree = parseInt(arg3);
    let sum= (finishOne+finishTwo+finishThree);
    let result = Math.floor(sum/60);
    let resultAdd = (sum%60);
    if(sum<10){
        console.log("0:0"+sum);
    }
    if(sum<=59&&sum>=10){
        console.log("0:" + sum);

    }
    if (sum>59&& resultAdd>=10){
        console.log(result+":"+resultAdd);
    }
    
     if(sum>59&&resultAdd<10){
        console.log(result+":0"+resultAdd);
    }
    
}
solve(['1','2','3']);