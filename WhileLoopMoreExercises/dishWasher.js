function solve(input){
    let detergentNumBottles = Number(input[0]);
    //let bottle = 750;
    //let plate = 0; //5 * 1
    //let pot = 0; //15 * 1
    let dishes = Number(input[1]);
    let index = 1;
    let pots = 0 ;
    let plates = 0;
    let command = input;
    let detergent = detergentNumBottles*750;
    let sum = 0;
    while(index<input.length){
        if(command === "End" && detergent>0){
            console.log("Detergent was enough!");
            console.log(plates+" dishes and "+pots+" pots were washed.");
            console.log("Leftover detergent "+(detergent-sum)+" ml.");

            break;
        }
       let currenDishes = Number(input[index]);
    
        if(index%3 === 0){
            sum +=  15*currenDishes;
            pots+=currenDishes;
        }else{
            sum += 5*currenDishes;
            plates+=currenDishes;
        }
        index++;
        currenDishes = Number(input[index]);
        command = input[index];
        
        
    }
    if(sum>detergent){
    console.log("Not enough detergent, "+Math.abs(sum-detergent)+" ml. more necessary!");
    }
}
//solve(['1','10','15','10','12','13','30']);
solve(['2','53','65','55','End']);