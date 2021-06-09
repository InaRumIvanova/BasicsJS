function solve() {
    //the best thing is to just use [...arguments] 
    //to collect all of the lines into a new array
    let input = [...arguments];
    let sumVoucher = Number(input.shift());
    let movie = 0;
    let otherProduct = 0;
    let currentProduct = input.shift();

    while (currentProduct !== 'End') {
        let total = 0;


        if (currentProduct.length > 8) {
            total += (Number(currentProduct.charCodeAt(0)) + Number(currentProduct.charCodeAt(1)));

            if (total <= sumVoucher) {
                movie++;
            } else {
                break;
            }

        } else {

            total = Number(currentProduct.charCodeAt(0));
            if (sumVoucher >= total) {
                otherProduct++;
            } else {
                break;
            }
        }
        sumVoucher -= total;

        currentProduct = input.shift();
    }
    console.log(movie);
    console.log(otherProduct);
}
solve('300','Captain Marvel','popcorn','Pepsi');
