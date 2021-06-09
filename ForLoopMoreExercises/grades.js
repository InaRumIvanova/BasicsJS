function solve(input){
    let studentNum = parseInt(input.shift([0]));
    //let grade = parseInt(input.shift());
    let fail = 0;
    let poorGrade = 0;
    let goodGrade = 0;
    let veryGoodGrade = 0;
    let sum = 0;
    for(let i = 0; i <= studentNum; i++){
        let currentGrade = Number(input.shift([i]));
        if(currentGrade>=2 && currentGrade<= 2.99){
            fail++;
            sum+=currentGrade;
        }
        if(currentGrade>=3.00 && currentGrade<=3.99){
            poorGrade++;
            sum+=currentGrade;
        }
        if(currentGrade>=4.00 && currentGrade<=4.99){
            goodGrade++;
            sum+=currentGrade;
        }
        if(currentGrade>=5.00 && currentGrade<=6.00){
            veryGoodGrade++;

            sum+=currentGrade;
        }
    }
    let averageGrade = sum/studentNum;
    let failPercent = fail/studentNum*100;
    let poorGradePercent = poorGrade/studentNum*100;
    let goodGradePercent = goodGrade/studentNum*100;
    let veryGoodPercent = veryGoodGrade/studentNum*100;

    console.log("Top students: "+ veryGoodPercent.toFixed(2)+"%");
    console.log("Between 4.00 and 4.99: "+goodGradePercent.toFixed(2)+"%");
    console.log("Between 3.00 and 3.99: "+poorGradePercent.toFixed(2)+"%");
    console.log("Fail: "+failPercent.toFixed(2)+"%");
    console.log("Average: "+ averageGrade.toFixed(2));


}