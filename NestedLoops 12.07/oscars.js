function solve(input) {
    let name = input.shift();
    let startingPoints = Number(input.shift());
    let n = Number(input.shift([0]));

    for (let i = 1; i <= n; i++) {
        let currentName = input.shift([i]);
        let currentPoints = Number(input.shift([i + 1]));
        startingPoints += (currentName.length * currentPoints) / 2;
        if (startingPoints > 1250.5) {
            console.log("Congratulations, " + name + " got a nominee for leading role with " + startingPoints.toFixed(1) + "!");
            break;
        }
    }

    if (startingPoints < 1250.5) {
        console.log("Sorry, " + name + " you need " + (1250.5 - (startingPoints)).toFixed(1) + " more!");
    }

}
solve(['Sandra Bullock', '340', '5', 'Robert De Niro', '50', 'Julia Roberts', '40.5', 'Daniel Day-Lewis', '39.4', 'Nicolas Cage', '29.9', 'Stoyanka Mutafova', '33']);
solve(['Zahari Baharov', '205', '4', 'Johnny Depp', '45', 'Will Smith', '29', 'Jet Lee', '10', 'Matthew Mcconaughey', '39']);