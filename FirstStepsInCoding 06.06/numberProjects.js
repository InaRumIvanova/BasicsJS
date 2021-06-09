function solve(input){
    let nameArch = input.shift();
    let numProjects = Number(input.shift());
    let projectHours = 3*numProjects;
    console.log(`The architect ${nameArch} will need ${projectHours} hours to complete ${numProjects} project/s.`);
}
solve(['Ina','3']);