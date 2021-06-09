function solve([arg1,arg2,arg3]){
    let num1 = parseInt(arg1);
    let num2 = parseInt(arg2);
    let operator = arg3;
    let result;
    if(operator === "/"){
        result = (num1/num2).toFixed(2);
    }
    if(operator === "%"){
        result = num1%num2;
    }
    
    if((operator === "/" || operator === "%")){
        if(num2!==0){
        console.log(num1 +" " + operator + " " +num2 +" = "+ result);
    
    }else{
        console.log("Cannot divide " +num1+ " by zero");
    }
    }
    if(operator === "+"){
        result = num1+num2;
    }
    if(operator === "-"){
        result = num1 - num2;
    }
    if(operator === "*"){
        result = num1*num2;
    }
   
    if (operator === "+" || operator === "-" || operator === "*"){
        if(result%2 == 0){
        console.log(num1 +" " + operator + " " +num2 +" = "+ result + " - even");
    }else{
        console.log(num1 +" " + operator + " " +num2 +" = "+ result + " - odd");
  
    }

}



}
solve(['123','12','/']);