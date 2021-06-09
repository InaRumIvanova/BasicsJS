function solve(input){
    let months = parseInt(input.shift([0]));
   // let electricityBill = Number(input[1]);
   let totalElectricity = 0;
    let water = 0;
    let internet = 0;
    let monthBills = 0;
    for(let i = 1; i<=months; i++){
        let currentBill = Number(input.shift([i]));
       monthBills+= (20+15+currentBill);
        totalElectricity+=currentBill;
        water=20*months;
        internet=15*months;
    }
    monthBills+=monthBills*0.20;
    console.log("Electricity: " + totalElectricity.toFixed(2)+" lv");
    console.log("Water: "+water.toFixed(2)+" lv");
    console.log("Internet: "+internet.toFixed(2)+" lv");
    console.log("Other: "+monthBills.toFixed(2)+" lv");
    console.log("Average: "+((totalElectricity+water+internet+monthBills)/months).toFixed(2)+" lv");

}
solve(['5','68.63','89.25','132.53','93.53','63.22']);