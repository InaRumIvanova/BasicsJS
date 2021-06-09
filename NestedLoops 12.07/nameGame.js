function solve(input) {
    let winnerName;
    let winnerScore = 0;
   
    let name;

    while ((name = input.shift()) !== 'Stop') {
      let playerScore = 0;
      
   //четем дължината на името
   //прочитаме съответния брой числа
   //ако нито едно от тях не съответства на конкретната буква, получаваме по две точки на буква
   //ако съответства получаваме 10

      for (let i = 0; i < name.length; i++) {
        let number = Number(input.shift());
        let charCode = name.charCodeAt(i);
   
        if (number === charCode) {
          playerScore += 10;
        } else {
          playerScore += 2;
        }
      }
   
      if (playerScore >= winnerScore) {
        winnerName = name;
        winnerScore = playerScore;
      }
    }
   
    console.log(`The winner is ${winnerName} with ${winnerScore} points!`);
  }
solve(['Ivan','73','20','98','110',
'Ivo','80','65','87',
'Stop']);