function solve(input) {
    let numTournaments = Number(input.shift());
    let totalWin = 0;
    let totalLose = 0;
    let total = 0;

    for (let i = 1; i <= numTournaments; i++) {
        let win = 0;
        let lose = 0;
        let currentMoney = 0;

        let command;
        while ((command = input.shift()) !== 'Finish') {
            let currentSport = (command);
            if (currentSport === "win") {
                win++;
                currentMoney += 20;
            }
            if (currentSport === "lose") {
                lose++;
            }

        }

        if (win > lose) {
            totalWin++;
            total += currentMoney * 1.10;

        } else {
            total+=currentMoney;
            totalLose++;
        }
    }
    if (totalWin > totalLose) {
        total *= 1.2;
        console.log("You won the tournament! Total raised money: " + (total).toFixed(2));
    } else {
        console.log("You lost the tournament! Total raised money: " + total.toFixed(2));
    }
}
solve(['2', 'volleyball', 'win', 'football', 'lose', 'basketball', 'win', 'Finish', 'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish']);
//solve(['3','darts','lose','handball','lose','judo','win','Finish','snooker','lose','swimming','lose','squash','lose','table tennis','win','Finish','volleyball','win','basketball','win','Finish']);