function giftsFromSanta([arg1, arg2, arg3]) {
    let n = Number(arg1);
    let m = Number(arg2);
    let s = Number(arg3);
    let g = "";
    for (let i = m; i >= n; i--) {
 
        if (i % 2 === 0 && i % 3 === 0) {
            if (i === s) 
            break;
        }
        g+= i + " ";
    }
    console.log(g);

}
giftsFromSanta(['20','1000','36']);