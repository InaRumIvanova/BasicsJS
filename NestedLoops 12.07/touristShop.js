function solve() {
    let input = [...arguments];
    let budget = Number(input.shift());
    let total = 0;
    let productNum = 0;
    let command;
    while ((command = input.shift()) !== "Stop") {
        //let product = input.shift();
        let price = Number(input.shift());
        productNum++;

        if (productNum % 3 === 0) {
            price -= price * 0.50;
        }

        budget -= price;
        total += price;

        if (budget < 0) {

            console.log("You don't have enough money!");
            console.log("You need " + Math.abs(budget).toFixed(2) + " leva!");
            break;
        }
    }

    if (budget >= 0) {
        //productNum++;
        console.log("You bought " + productNum + " products for " + total.toFixed(2) + " leva.");

    }
}
//solve('153.20','Backpack','25.20','Shoes','54','Sunglasses','30','Stop');
solve('54', 'Thermal underwear', '24', 'Sunscreen', '45');