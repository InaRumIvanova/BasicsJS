function solve(input) {

    let n = Number(input.shift());
    // let sport = input[1];
    // let result = input[2];
    // let money = 0;
    // let index = 1;
    
    let dayWin = 0;
    let dayLose = 0;
    let total = 0;
    
    for (let i = 1; i <= n; i++) {
        let currentLine = input.shift();
        let currentMoney = 0;
        let win = 0;
        let lose = 0;
        // while (index < input.length) {
        while (currentLine !== 'Finish') {
            sport = currentLine;
            result = input.shift();

            if (result === "win") {
                currentMoney += 20;
                win++;

            } else if (result === "lose") {
                lose++;
            }

            // index++;

            currentLine = input.shift();
        }
        if (win > lose) {
            total += currentMoney * 1.10;
            // total += money;
            dayWin++;
        } else {
            total += currentMoney;
            dayLose++;
        }
    }

    if (dayWin > dayLose) {
        // total += total * 0.2;
        total *= 1.2;
        console.log("You won the tournament! Total raised money: " + total.toFixed(2));
    } else {
        console.log("You lost the tournament! Total raised money: " + total.toFixed(2));
    }
}
     solve(['2','volleyball','win','football','lose','basketball',
       'win','Finish','golf','win','tennis','win','badminton','win','Finish']);
     
    solve(['3','darts','lose','handball','lose','judo','win','Finish','snooker','lose','swimming','lose','squash','lose','table tennis','win','Finish','volleyball','win','basketball','win','Finish']);
     