function solve([arg1,arg2]){
    let month = arg1;
    let numNights = parseInt(arg2);
    let finalPriceStudio = 0;
    let finalPriceApartement = 0;
    
    if(month === "May" || month === "October"){
       finalPriceStudio = numNights*50;
       finalPriceApartement = numNights*65;
       if(numNights>7 && numNights<=14){
           finalPriceStudio = finalPriceStudio - finalPriceStudio*0.05;
       }else if(numNights>14){
        finalPriceStudio = finalPriceStudio - finalPriceStudio*0.3;
  
       }
        }
        if(month === "June" || month === "September"){
            finalPriceStudio = numNights*75.20;
            finalPriceApartement = numNights*68.70;
            if(numNights>14){
                finalPriceStudio = finalPriceStudio - finalPriceStudio*0.20;
            }
        }
        if(month === "August" || month === "July"){
            finalPriceStudio = numNights*76;
            finalPriceApartement = numNights*77;
        }
        if(numNights>14){
            finalPriceApartement = (finalPriceApartement - finalPriceApartement*0.10);
        }
        
console.log("Apartment: "+finalPriceApartement.toFixed(2) + " lv.");

console.log("Studio: "+finalPriceStudio.toFixed(2) + " lv.");

}
solve(['May','15']);