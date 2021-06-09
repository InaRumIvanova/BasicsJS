function solve(input){
    let numDogs = Number(input.shift());
    let numAnimals = Number(input.shift());
    let food = 2.50*numDogs + 4*numAnimals;
    
    console.log(food + " lv.");
}
solve(['5','4']);