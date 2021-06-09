function solve(input){
    let index = 0;// let i = 0; (starting point)
    while(true){
        let  str = input[index];  // let currentNum = Number(input([i]));
        index++; // i++;
        if(str === "Stop"){ // condition
            break; // end of condition
        }
        console.log(str);
    }


}
solve(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"]);
