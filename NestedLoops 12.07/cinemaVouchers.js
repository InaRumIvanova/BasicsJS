function solve(input) {
    let sumVoucher = Number(input[0]);
    let index = 1;
    let total = 0;
    let movie = 0;
    let otherProduct = 0;

    while (index < input.length) {

        let currentProduct = input[index];

        if (currentProduct === "End") {

            break;
        }

        if (currentProduct.length > 8) {
            total += (currentProduct.charCodeAt(0) + currentProduct.charCodeAt(1));

            if (total <= sumVoucher) {
                movie++;
            }
            sumVoucher -= total;

        } else {

            if (currentProduct.charCodeAt(0) >= 97 &&
                currentProduct.charCodeAt(0) <= 122)
                if (sumVoucher >= currentProduct.charCodeAt(0))
                    otherProduct++;
        }

        index++;


    }
    console.log(movie);
    console.log(otherProduct);

}
solve(['300','Captain Marvel','popcorn','Pepsi']);
solve(['1500', 'Avengers: Endgame', 'Bohemian Rhapsody', 'Deadpool 2', 'End']);