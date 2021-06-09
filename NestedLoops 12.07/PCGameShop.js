function solve(input){
let n = Number(input.shift());
let heartNum =0;
let forniteNum = 0;
let overwatchNum = 0;
let others = 0;
for(let i = 1;i<=n; i++){
    let currentGame = input.shift([i]);

    if(currentGame === "Hearthstone"){
        heartNum++;
    }else if(currentGame === "Fornite"){
        forniteNum++;
    }else if(currentGame === "Overwatch"){
        overwatchNum++;
    }else{
        others++;
    }
}
let percentHeart = heartNum/n*100;
let percentFornite = forniteNum/n*100;
let percentOverwatch = overwatchNum/n*100;
let percentOthers = others/n*100;

console.log("Hearthstone - "+percentHeart.toFixed(2)+"%");
console.log("Fornite - "+percentFornite.toFixed(2)+"%");
console.log("Overwatch - "+percentOverwatch.toFixed(2)+"%");
console.log("Others - "+percentOthers.toFixed(2)+"%");
}
solve(['4','Hearthstone','Fornite','Overwatch','Counter-Strike']);