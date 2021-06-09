// function solve(input) {
//     let first = input.shift();
//     let second = input.shift();
//     let skiped = input.shift();
   
//     let count = 0;
//     let g = "";
//     for (let i = first; i <= second; i++) {
//         for (let j = first; j <= second; j++) {
//             for (let k = first; k <=second; k++) {
//                 if (i !== skiped || j !== skiped || k !== skiped) {

//                     count++;
//                     g += (i + j + k) + " ";

//                 }
//             }
//         }

//     }
//     console.log(g);
//     console.log(count);
// }
// solve(['a', 'c', 'b']);

function solve(input) {
    // let first = input.shift();
    // let second = input.shift();
    // let skiped = input.shift();

    let first = input.shift().charCodeAt(0);
    let second = input.shift().charCodeAt(0);
    let skiped = input.shift();

    let array = [];
    let count = 0;
    let g = "";
    for (let i = first; i <= second; i++) {
        for (let j = first; j <= second; j++) {
            for (let k = first; k <= second; k++) {
                let firstLetter = String.fromCharCode(i);
                let secondLetter = String.fromCharCode(j);
                let thirdLetter = String.fromCharCode(k);

                // if (i !== skiped || j !== skiped || k !== skiped) { Use &&, || will not work
                if (firstLetter !== skiped && secondLetter !== skiped && thirdLetter !== skiped) {

                    count++;
                    // g += (i + j + k) + " ";
                    g += (firstLetter + secondLetter + thirdLetter) + " ";
                    array.push(firstLetter + secondLetter + thirdLetter);

                }
            }
        }

    }
    // console.log(g);
    // console.log(count);
    array.push(count);
    console.log(array.join(' '));
}
solve(['a', 'c', 'b']);
