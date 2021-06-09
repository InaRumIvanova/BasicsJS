function solve(n){
    //var line = '';
    //let g = '';
    for(let i = 1; i<=n; i++){
        let line = '';
        let g ='';
        for(let j = 1; j<=i;j++){
         line+= i+ " ";
         g+=j+" ";
        }
        console.log(line);
        console.log(g);
    }
    //console.log(g);
    //console.log(line);
}
solve(6);