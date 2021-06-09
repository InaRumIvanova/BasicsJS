function solve(n,v){
    //toString -> превръщаме числото в низ;
    //sum += char -> събираме всяка една цифра от числото n;
    let sum = 0;
    n = n.toString();
    
    for(let i = 0; i< n.length; i++ ){
        
        //като добавим Number пред (n.charAt(i)), тогава към сумата ще добавяме
        //цифри, а не стрингове и ще получим сума от числа "1+2+3...". Ако не добавим Number, тогава ще получим низ от стрингове.

        sum+= Number(n.charAt(i));
    
    
}
    console.log(sum);


}
solve(234, 234);