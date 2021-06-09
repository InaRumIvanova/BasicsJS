function solve(input) {
    let numTournirs = Number(input.shift());
    let startingPoints = Number(input.shift());
    let total = 0;
    let currentPoints = 0;
    let win = 0;

    for (let i = 0; i <= numTournirs; i++) {
        let currentType = input.shift([i]);
        //let currentPoints = Number(input.shift([i]));
        if (currentType === "W") {
            currentPoints = 2000;
            total += currentPoints;
            win++;
        } else if (currentType === "F") {
            currentPoints = 1200;
            total += currentPoints;
        } else if (currentType === "SF") {
            currentPoints = 720;
            total += currentPoints;
        }
    }
    total += startingPoints;
    console.log("Final points: " + total);

    total -= startingPoints;
    let average = total / numTournirs;
    console.log("Average points: " + (Math.floor(average)));

    let winGames = (win / numTournirs) * 100;
    console.log(winGames.toFixed(2) + "%");

}
solve(['5', '1400', 'F', 'SF', 'W', 'W', 'SF']);