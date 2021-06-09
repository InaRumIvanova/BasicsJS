function solve(input){
let numOne = Number(input.shift());
let numTwo = Number(input.shift());
let g = '';
for(let i = numOne; i<= numTwo; i++){
for(let i2 = numOne; i2<=numTwo; i2++){
    for(let i3 = numOne; i3<=numTwo; i3++){
        for(let i4 = numOne; i4<=numTwo; i4++){
            if(i>i4){
            if((i%2 === 0 && i4%2 !== 0) || (i%2 !== 0 && i4%2 === 0)){
                if((i2+i3)%2 === 0){
                    g+=i+""+i2+""+i3+""+i4+" ";
                }
            }
            }
        }
    }
}
}
console.log(g);

}
solve(['2','3']);