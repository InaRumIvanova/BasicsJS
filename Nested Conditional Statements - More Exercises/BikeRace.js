function solve([arg1,arg2,arg3]){
let juniorBikers = Number(arg1);
let seniorBikers = Number(arg2);
let route = arg3;
let paymentJunior = 0;
let paymentSenior = 0;
let total = 0;
if(juniorBikers !== 0){
switch(route){
    case "trail":
    paymentJunior = 5.50;
    break;
    case "cross-country":
        paymentJunior = 8;
        break;
        case "downhill":
            paymentJunior = 12.25;
            break;
            case "road":
                paymentJunior = 20;
                break;
}
if(seniorBikers!==0){
    switch(route){
        case "trail":
        paymentSenior = 7;
        break;
        case "cross-country":
            paymentSenior = 9.50;
            break;
            case "downhill":
                paymentSenior = 13.75;
                break;
                case "road":
                    paymentSenior = 21.50;
                    break;
    }

}
}
let totalBikers = juniorBikers+seniorBikers;
total = paymentJunior*juniorBikers + paymentSenior*seniorBikers;
let percent = total*0.05;
let final = total - percent;

if(totalBikers>=50 && route === "cross-country"){
    final-=final*0.25;
    console.log(final.toFixed(2));
}else{

console.log(final.toFixed(2));
}
}
solve(['30','25','cross-country']);