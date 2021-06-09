function solve(input) {

    let numberPart = Number(input.shift());

    let max = Number.MIN_SAFE_INTEGER;

    let name = '';

    for (let i = 1; i <= numberPart; i++) {

        let currentName = input.shift();
        let total = 0;

        let command;
        while ((command = input.shift()) !== 'Stop') {

            let currentPoints = Number(command);

            if (currentPoints <= 0 || currentPoints > 10) {

                currentName = input.shift();
                continue;
            }
            total += currentPoints;

        }
        if (total > max) {
            max = total;
            name = currentName;
            console.log(name + " has " + max + " points.");
            console.log(name + " is the new number 1!");
        }else{
            console.log(currentName + " has "+total+" points.");
        }

    }
   
    console.log(name + " won competition with " + max + " points!");

}
solve(['3', 'Chef Manchev', '10', '10', '10', '10', 'Stop', 'Natalie', '8', '2', '9', 'Stop', 'George', '9', '2', '4', '2', 'Stop']);