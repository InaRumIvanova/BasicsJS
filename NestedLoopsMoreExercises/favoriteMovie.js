function solve(input) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let bestMovie = '';

    //първи цикъл -> заглавия на филми
    //можем да имаме 7 заглавия на филми
    for (let n = 1; n <= 7; n++) {
        let currentMovie = input.shift();
        let sum = 0;

        //до команда STOР се получават заглавия на филми
        if (currentMovie == 'STOP') {
            console.log(`The best movie for you is ${bestMovie} with ${maxSum} ASCII sum.`);
            return;
        }
        let duljina = currentMovie.length;

        //втори цикъл, проверяващ дължината на всеки филм
        for (let k = 0; k < duljina; k++) {

            //За всяка главна буква в заглавието, от сумата трябва 
            //да се извади дължината на заглавието на филма
            if (
                currentMovie.charCodeAt(k) >= 65 &&
                currentMovie.charCodeAt(k) <= 90
            ) {
                sum -= currentMovie.length;

                //За всяка малка буква в заглавието, от сумата трябва 
                //да се извади два пъти дължината на заглавието на филма.
            } else if (
                currentMovie.charCodeAt(k) >= 97 &&
                currentMovie.charCodeAt(k) <= 122
            ) {
                sum -= 2 * currentMovie.length;
            }
            //прибавяне на дължината на филма към сумата
            sum += currentMovie.charCodeAt(k);
        }
        
        //намиране на филма с най-голяма сума
        if (sum > maxSum) {
            maxSum = sum;
            bestMovie = currentMovie;
        }
    }
    console.log(`The limit is reached.`);
    console.log(`The best movie for you is ${bestMovie} with ${maxSum} ASCII sum.`);
}
solve(['Matrix','Breaking bad','Legend','STOP']);