function solve(input){
let n = Number(input.shift());
let p1 = 0;
let p2 = 0;
let p3 = 0;
for(let i = 0; i <= n; i++){
    let currentNum = Number(input.shift([i]));
    if(currentNum % 2 ===0 ){
         p1++;
    } if(currentNum % 3 === 0){
        p2++;
    } if(currentNum % 4 === 0){
        p3++;
    }
}
let percent1 = p1/n*100;
console.log(percent1.toFixed(2)+"%");
let percent2 = p2/n*100;
console.log(percent2.toFixed(2)+"%");
let percent3 = p3/n*100;
console.log(percent3.toFixed(2)+"%");
}
solve(['3','3','6','9']);