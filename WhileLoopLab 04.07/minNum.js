function solve(input){
    let inputNumber = input[0];
    let index=1;
    let min = Number.MAX_SAFE_INTEGER;

    while(inputNumber!=="Stop"){
        let num = Number(inputNumber);
        if(num<min){
            min=num;
        }
        inputNumber = input[index];
        index++;
    }
    console.log(min);
}
solve(["100",
"99",
"80",
"70",
"Stop"]);
