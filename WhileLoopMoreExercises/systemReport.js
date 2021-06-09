function solve(input){
    let sum = Number(input[0]);
    let command = input;
    let index = 1;
    let total = 0;
    let totalEven = 0;
    let totalOdd = 0;
let oddCount = 0;
let evenCount = 0;
    while(index<input.length){
        if(command === "End"){
            console.log("Failed to collect required money for charity.");

            break;
        }  
       
        let currentProduct = Number(input[index]);
        
        if(index%2===0){
            if(currentProduct <10){
                console.log("Error in transaction!");
            }else{
                totalEven+=currentProduct;
                console.log("Product sold!");
                total+=currentProduct;
                evenCount++;
            }

        }else{
            if(currentProduct>100){
                console.log("Error in transaction!");
            }else{
                totalOdd+=currentProduct;
                console.log("Product sold!");
                total+=currentProduct;
                oddCount++;
            }
        }
       
        index++;
        currentProduct = Number(input[index]);
        command = input[index];
        
        if(total>=sum){
            console.log("Average CS: "+ (totalOdd/oddCount).toFixed(2));
            console.log("Average CC: "+(totalEven/evenCount).toFixed(2));
            break;  
        }
        
        
    }
   
   
}
solve(['500','120','8','63','256','78','317']);
solve(['600','86','150','98','227','End']);
