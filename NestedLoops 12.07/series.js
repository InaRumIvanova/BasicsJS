function solve(input){
    let budget = Number(input.shift());
    let numSeries = Number(input.shift([0]));
    
    let sum = 0;
    for (let i = 1; i <= numSeries; i++) {
        let currentName = input.shift([i]);
        let currentPrice = Number(input.shift([i + 1]));

        if(currentName === "Thrones"){
            sum+=currentPrice*0.50;
        }
        else if(currentName === "Lucifer"){
            sum+=currentPrice*0.60;
        }
        else if(currentName === "Protector"){
            sum+=currentPrice*0.70;
        }
        else if(currentName === "TotalDrama"){
            sum+=currentPrice*0.80;
        }
        else if(currentName === "Area"){
            sum+=currentPrice*0.90;
        }
        else{
        sum+=currentPrice;
        }
    }
    
    if(sum<=budget){
        console.log("You bought all the series and left with "+(budget-sum).toFixed(2)+" lv.");
    }else{
        console.log("You need "+(sum-budget).toFixed(2)+" lv. more to buy the series!");
    }
}
solve(['10','3','Thrones','5','Riverdale','5','Gotham','2']);
solve(['25','6','Teen Wolf','8','Protector','5','TotalDrama','5','Area','4','Thrones','5','Lucifer','9']);