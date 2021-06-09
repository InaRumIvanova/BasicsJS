function solve(arr){
    let inputElement = arr[0];
    let bestPlayer = arr;
    let index=0;
    let max = Number.MIN_SAFE_INTEGER;
    while(inputElement!=="END"){
        let num = Number(inputElement);
        if(num>max){
            max=num;
        }
        
        index++;   
        inputElement = (arr[index+1]);  
        bestPlayer = arr[index-1];  
    }
    if(max<3){
        console.log(bestPlayer + " is the best player");
        console.log(bestPlayer+ " has scored "+max+" goals");
    }else{
    console.log(bestPlayer +" is the best player!He has scored "+max+" goals and made a hat-trick !!!");
}
}
solve(['Zidane',
    '1',
    'Felipe',
    '2',
    'Johnson',
    '2',
    'END']);