function solve([arg1,arg2,arg3]){
    let type = arg1;
    let row = parseInt(arg2);
    let column = parseInt(arg3);
    let income = 0;
    let totalSeats = row*column;
    if(type === "Premiere"){
        income = totalSeats*12.0;
    }else if(type === "Normal"){
        income = totalSeats*7.50;
    }else if(type === "Discount"){
        income = totalSeats*5.00;
    }
    console.log(income.toFixed(2));

}
solve(['Premiere','10','12']);