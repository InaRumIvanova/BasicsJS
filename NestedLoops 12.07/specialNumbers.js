function solve(input){
    let n = Number(input[0]);
    let isSpecial = true;
    let result = '';
    //1111 to 9999
    for(let i = 1111; i<=9999; i++){
        let isSpecial = true;

        for(let j = 0; j<4; j++){
            let str = String(i);
            let digit = Number(str.charAt(j));
            if(n%digit!==0){
                isSpecial=false;
                break;
            }
        }
        if(isSpecial){
            result+=i+ ' ';
        }
    }
    console.log(result);
}