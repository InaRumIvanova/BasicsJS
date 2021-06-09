function solve([arg1,arg2]){
let leapYear = parseInt(arg1);
let year = parseInt(arg2);

for(i = leapYear; i<=year; i+=4){
    console.log(i);
}
}
solve(['2000','2011']);