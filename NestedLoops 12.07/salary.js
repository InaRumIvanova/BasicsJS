function solve(input){
    let n = parseInt(input.shift([0]));
    let salary = parseFloat(input.shift([1]));
    

    for (let i = 0; i <= n; i++) {
        let currentSite = input.shift([i]);
        
        if (currentSite === "Facebook"){
            salary-=150;

        }if (currentSite === "Instagram"){
            salary-=100;
        }if (currentSite === "Reddit") {
            salary-=50;
        }
        
    }
    if (salary<=0){
        console.log("You have lost your salary.");
    }else{
    
    console.log(salary);
    }
}
solve(['3','500','Facebook','Stackoverflow.com','softuni.bg']);