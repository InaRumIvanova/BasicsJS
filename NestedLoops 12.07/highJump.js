function solve(input) {
    let jumpHeightWanted = +input.shift();
    let jumpHeight = +input.shift();
    let firstJump = jumpHeightWanted - 30;
    let numJumps = 1;
    let failJumps = 0;
    //let jumpHeightWanted = +input.shift();
//is used instead of:
//let jumpHeightWanted = Number(input.shift());
//meaning to convert a given string variable into an int value. So far, all of the SoftUni instructors have advised not to use this 'Hack' as it can be easily overlooked.


    while (true) {
        if (jumpHeight > firstJump) {
            if (firstJump >= jumpHeightWanted) {
                console.log(`Tihomir succeeded, he jumped over ${jumpHeightWanted}cm after ${numJumps} jumps.`);
                return;
            }
            firstJump += 5;
            failJumps = 0;
        } else {
            failJumps++;
            if (failJumps == 3) {
                console.log(`Tihomir failed at ${firstJump}cm after ${numJumps} jumps.`);
                return;
            }
        }
        jumpHeight = +input.shift();
        numJumps++;
    }
}
solve(['231','205','212','213','228','229','230','235']);