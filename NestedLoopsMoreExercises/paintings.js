function paintingEggs(arg1, arg2, arg3) {
    let eggSize = arg1;
    let eggColour = arg2;
    let numberOfBuchers = Number(arg3);
    let totalPrice = 0;
 
    switch (eggSize) {
        case "Large":
            switch (eggColour) {
                case "Red":
                    totalPrice = numberOfBuchers * 16;
                    break;
                case "Green":
                    totalPrice = numberOfBuchers * 12; 
                    break;               
                case "Yellow":
                    totalPrice = numberOfBuchers * 9;
                    break;
            }
            break;
        case "Medium":
            switch (eggColour) {
                case "Red":
                    totalPrice = numberOfBuchers * 13;
                    break;
                case "Green":
                    totalPrice = numberOfBuchers * 9;   
                    break;             
                case "Yellow":
                    totalPrice = numberOfBuchers * 7;
                    break;
            }
            break;
        case "Small":
            switch (eggColour) {
                case "Red":
                    totalPrice = numberOfBuchers * 9;
                    break;
                case "Green":
                    totalPrice = numberOfBuchers * 8;     
                    break;           
                case "Yellow":
                    totalPrice = numberOfBuchers * 5;
                    break;
            }
            
    }
    totalPrice -= totalPrice * 0.35;
    console.log(`${totalPrice.toFixed(2)} leva.`);
}
 
paintingEggs("Large", "Red", "7");