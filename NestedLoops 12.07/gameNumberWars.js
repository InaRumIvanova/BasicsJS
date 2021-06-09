function solve() {
    let input = [...arguments];
    let input2 = [...arguments];

    let playerOne = input.shift();
    let playerTwo = input.shift();
    let totalOne = 0;
    let totalTwo = 0;
    let currentCard = Number(input.shift());
    let currentCardNext = Number(input.shift());
    let command = input2.shift();

    while (command !== "End of game") {

        if (currentCard > currentCardNext) {
            totalOne += currentCard - currentCardNext;

        } else if (currentCard < currentCardNext) {
            totalTwo += currentCardNext - currentCard;
        } else if (currentCard === currentCardNext) {
            console.log("Number wars!");

            command = input2.shift();
        currentCard = Number(input.shift());
        currentCardNext = Number(input.shift());
        
            if (totalOne > totalTwo) {
                console.log(playerOne + " is winner with " + (totalOne) + " points");

            } else {
                console.log(playerTwo + " is winner with " + (totalTwo) + " points");
            }
            break;
        }

        

    }
    if (command === "End of game") {
        console.log(playerOne + " has " + (totalOne) + " points");
        console.log(playerTwo + " has " + (totalTwo) + " points");

    }
}

solve('Desi', 'Niki', '7', '5', '3', '4', '3', '3', '5', '3');
solve('Elena', 'Simeon', '6', '3', '2', '5', '8', '9', 'End of game');
solve('Aleks', 'Georgi', '4', '5', '3', '2', '4', '3', '4', '4', '5', '2');