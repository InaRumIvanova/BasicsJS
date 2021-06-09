function solve([arg1,arg2,arg3]){
    let salary = parseFloat(arg1);
    let averageGrade = parseFloat(arg2);
    let minSalary = parseFloat(arg3);
    let scholarshipSocial = Math.floor(0.35*minSalary);
    let scholarshipExcellent = Math.floor(averageGrade*25);
   
    if(averageGrade>=4.5 && averageGrade<5.50 && salary>minSalary){
        console.log("You cannot get a scholarship!");
    }
    if(averageGrade>=4.5 && averageGrade<5.50 && salary<=minSalary){
        console.log("You get a Social scholarship "+(scholarshipSocial)+" BGN");
    }if(averageGrade<4.5){
        console.log("You cannot get a scholarship!");
    }
    if(averageGrade>=5.50 && salary<=minSalary){
        console.log("You get a Social scholarship "+(scholarshipSocial)+" BGN");
        
    }else if(averageGrade>=5.50 && salary>minSalary){
        console.log("You get a scholarship for excellent results "+scholarshipExcellent+" BGN");

    }
}
solve(['480','5.50','450.00']);