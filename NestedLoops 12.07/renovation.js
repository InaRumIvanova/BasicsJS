function solve() {
    let input = [...arguments];
    let height = Number(input.shift());
    let width = Number(input.shift());
    let percent = Number(input.shift());
    let total = Math.ceil((height * width * 4) - (height * width * 4) * (percent / 100));
    let command;
    while ((command = input.shift()) !== "Tired!") {
        let currentLiters = Number(command);

        total -= currentLiters;

        if (total < 0) {
            console.log("All walls are painted and you have " + Math.abs(total) + " l paint left!");
            break;
        }
        if (total === 0) {
            console.log("All walls are painted! Great job, Pesho!");
            break;
        }

    }

    if (command === "Tired!") {
        console.log(total + " quadratic m left.");
    }

}
//solve('3', '5', '10', '2', '3', '4', 'Tired!');
//solve('2','3','25','6','7','8');
//solve('2','3','25','10','8');
//solve('2','3','25','5','11','2');
//solve('2','3','25','5','10','5');