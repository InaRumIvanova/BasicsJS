function solve(arr){
    const goal = 10000;
    let steps = 0;
    let index = 0;//взимаме всяка следваща стойност
    while(steps<goal){
        let current = arr[index];
        if(current === "Going home"){
            steps+=Number(arr[index+1]);
            break;

        } 
        steps += Number(current);
        index++;
    }
    if(steps>=goal){
        console.log("Goal reached! Good job! "+(steps-goal)+ "steps over the goal!");
    }else{
        console.log((goal-steps)+" more steps to reach goal.");
    }
}
solve(["1000",
"1500",
"2000",
"6500"]);
