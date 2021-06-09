function solve(input){
    let period = parseInt(input.shift([0]));
    let patients = parseInt(input[1]);
    let doctors = 7;
    let treated = 0;
    let untreated = 0;
    
    for(let i = 1; i <= period; i++){
        let currentPatients = Number(input.shift([i]));
        if(i%3===0){
            if(untreated>treated){
                doctors++;
            }
        }
        if(currentPatients<=doctors){
        treated+=currentPatients;
            
        }if(currentPatients>doctors){
        treated+=doctors;
        untreated+=(currentPatients-doctors);
        }
       
        
    }
    console.log("Treated patients: "+treated+".");
    console.log("Untreated patients: "+untreated+".");
}
solve(['4','7','27','9','1']);