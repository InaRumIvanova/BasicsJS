function solve(input){
let n = Number(input[0]);
let k = Number(input[1]);
let m = Number(input[2]);
for(let i = 2; i<=n; i+=2){
    
    for(let j = 2; j<=k; j++){

        for(let s = 2; s<=m; s+=2){
              
            
                if(j == 2 || j == 3 || j == 5 || j == 7){
                    

                console.log(i + " " + j + " " + s);

        }
    }
}

}
}

solve(['3','5','5']);