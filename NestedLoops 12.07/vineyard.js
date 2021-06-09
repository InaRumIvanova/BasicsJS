function vineyard(arg1, arg2, arg3, arg4) {
    let vineyardArea = Number.parseInt(arg1);
    let wine = Number.parseFloat(arg2);
    let neededLitersWine = Number.parseInt(arg3);
    let numberWorkers = Number.parseInt(arg4);

    let totalGrapes = (vineyardArea * wine);
    let totalWine = (0.40 * (totalGrapes / 2.5));
 
    if (totalWine < neededLitersWine) {
        console.log(`It will be a tough winter! More ${Math.floor(neededLitersWine-totalWine).toFixed(0)} liters wine needed.`);
    
    }else{
        let wineWorker = ((totalWine - neededLitersWine) / numberWorkers);

        console.log(`Good harvest this year! Total wine: ${Math.floor(totalWine)} liters.`);
    
        console.log(`${Math.ceil(totalWine - neededLitersWine)} liters left -> ${Math.ceil(wineWorker)} liters per person.`);
    }
}
//vineyard('650','2','175','3');
vineyard('1020','1.5','425','4');