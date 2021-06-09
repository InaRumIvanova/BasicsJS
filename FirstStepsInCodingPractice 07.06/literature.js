function solve([arg1,arg2,arg3]){
    let pagesAll = Number(arg1);
    let pagesPerHour = Number(arg2);
    let days = Number(arg3);
    let hours = pagesAll/pagesPerHour;
    let hoursPerDay = hours/days;
    console.log(hoursPerDay);
}
solve(['212','20','2']);