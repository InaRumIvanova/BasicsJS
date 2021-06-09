function solve(input){
    let player = input[0];
    let field = input[1];
    let points = parseInt(input[2]);
    let pointsField = 0;
    let index = 1;
    
    let unsuccessfulShots = 0;

    let maxPoints = 301;
    
    while((field!=="Retire") && (maxPoints!==0)){
        
        let currentField = (field);
        
        
        if(currentField === "Single"){
            if(maxPoints>=points*1){
            pointsField++;
            
            maxPoints -= points*1;
       }else{
           unsuccessfulShots++;
       }
    }
         if(currentField === "Double"){
             if(maxPoints>=points*2){
            pointsField++;
            
            maxPoints -= points*2;
     }else{
         unsuccessfulShots++;
     }
    }
      if(currentField === "Triple"){
          if(maxPoints>=points*3){
            pointsField++;
            
            maxPoints -= points*3;
     }else{
    unsuccessfulShots++; 
    }
}
if(currentField === "Retire"){
        break;
    }
        index+=2;
        field = input[index];
        points = Number(input[index+1]);
    
    }
    
    if (maxPoints === 0){
        console.log(player + " won the leg with "+pointsField+" shots.");

    }else{
        console.log(player+" retired after "+unsuccessfulShots+" unsuccessful shots.");

    }


}
//solve(['Rob Cross','Triple','20','Triple','20','Triple','20','Triple','20','Double','20','Triple','20','Double','5','Triple','10','Double','6','Retire']);

solve(['Michael van Gerwen',
'Triple',
'20',
'Triple',
'19',
'Double',
'10',
'Single',
'3',
'Single',
'1',
'Triple',
'20',
'Triple',
'20',
'Double',
'20']);

    