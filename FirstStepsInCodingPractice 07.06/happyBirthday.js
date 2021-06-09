function solve(input){
    let rent = parseFloat(input);
    let cake = rent*0.20;
    let drinks = cake - (cake*0.45);
    let animator = rent/3;
    let total = cake+drinks+animator+rent;
    console.log(total);

}
solve(['2250']);