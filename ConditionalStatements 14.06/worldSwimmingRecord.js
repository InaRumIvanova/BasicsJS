function solve([arg1,arg2,arg3]){
    let recordSeconds = parseFloat(arg1);
    let distenceMeters = parseFloat(arg2);
    let time = parseFloat(arg3);

    let totalTime = ((distenceMeters*time) + (Math.floor(distenceMeters/15)*12.5));

    if(totalTime<recordSeconds){
        console.log("Yes, he succeeded! The new world record is "+ (totalTime).toFixed(2) + " seconds.");

    }else{
        console.log("No, he failed! He was "+ (totalTime-recordSeconds).toFixed(2)+
        " seconds slower.");
    }

}
solve(['55555.67','3017','5.03']);