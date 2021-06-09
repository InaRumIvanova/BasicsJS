function solve([arg1,arg2,arg3]){
    let distence = parseFloat(arg1);
    let inputData = arg2;
    let outputData = arg3;
    let result = 0.0;
    let m = 1;
    let cm = m*100;
    let mm = m*1000;
    if(inputData === "m" && outputData === "cm"){
        result = distence*m*100;
        console.log(result.toFixed(3));
    }else if(inputData === "m" && outputData === "mm"){
        result = distence*m*1000;
        console.log(result.toFixed(3));
    }
    if(inputData === "cm" && outputData === "m"){
        result = distence*m*0.01;
        console.log(result.toFixed(3));
    }else if(inputData === "mm" && outputData === "m"){
        result = distence*m*0.001;
        console.log(result.toFixed(3));
    }
    if(inputData === "cm" && outputData === "mm"){
        result = distence*m*10;
        console.log(result.toFixed(3));
    }else if(inputData === "mm" && outputData === "cm"){
        result = distence*m*0.1;
        console.log(result.toFixed(3));
    }


}
solve(['5.7896','m','mm']);