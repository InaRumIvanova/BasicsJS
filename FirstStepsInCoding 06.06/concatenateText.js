function solve(input){
    let fName = input.shift();
    let lastName = input.shift();
    let age = parseInt(input.shift());
    let town = input.shift();
    console.log(`You are ${fName} ${lastName}, a ${age}-years old person from ${town}.`);
}
solve(['Ina','Ivanova','29','Sofia']);