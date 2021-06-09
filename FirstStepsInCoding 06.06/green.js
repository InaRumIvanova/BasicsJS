function solve(input){
    let spaceGreen = parseFloat(input.shift());
    let priceOne = 7.61;
    let priceTotal = priceOne*spaceGreen;
    let discount = 0.18*priceTotal;
    let finalPrice = priceTotal-discount;
    console.log("The final price is: "+ finalPrice+" lv.");
    console.log("The discount is: "+ discount+" lv.");
}
solve(['550']);