function solve(input){
    let name = input[0];
    let grades = 1;
    let sum = 0;
    let excluded = 0;
    let index = 1;
    
    while(grades<=12){
        
        let grade = Number(input[index]);
        index++;
        if(grade>=4.00){
            grades++;
            sum+=grade;
        
        }
        else {
            excluded+=1;
            if(excluded>1){
            console.log(name + " has been excluded at "+grades+" grade");
            break;
            }
        
}
    if(grades>12){
        let average = sum/12;
        console.log(name+ " graduated. Average grade: " +average.toFixed(2));
    }
    }
    
    }

    solve(["Mimi", 
    "5",
    "6",
    "5",
    "6",
    "5",
    "6",
    "6",
    "2",
    "3"]);