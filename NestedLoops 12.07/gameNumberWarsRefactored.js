function solve() {
    let input = [...arguments];
    let playerOne = input.shift();
    let playerTwo = input.shift();
    let totalOne = 0;
    let totalTwo = 0;
  
    let command;
    while ((command = input.shift()) !== 'End of game') {

      let currentCard = Number(command);
      let currentCardNext = Number(input.shift());

      if (currentCard > currentCardNext) {
        totalOne += currentCard - currentCardNext;
  
      } else if (currentCard < currentCardNext) {
        totalTwo += currentCardNext - currentCard;
      } else if (currentCard === currentCardNext) {
        console.log('Number wars!');
  
        currentCard = Number(input.shift());
        currentCardNext = Number(input.shift());
  
        if (currentCard > currentCardNext) {
          console.log(playerOne + ' is winner with ' + (totalOne) + ' points');
        } else {
          console.log(playerTwo + ' is winner with ' + (totalTwo) + ' points');
        }
  
        break;
      }
    }
  
    if (command === 'End of game') {
      console.log(playerOne + ' has ' + (totalOne) + ' points');
      console.log(playerTwo + ' has ' + (totalTwo) + ' points');
    }
  }
  solve('Desi', 'Niki', '7', '5', '3', '4', '3', '3', '5', '3');
//solve('Elena', 'Simeon', '6', '3', '2', '5', '8', '9', 'End of game');
//solve('Aleks', 'Georgi', '4', '5', '3', '2', '4', '3', '4', '4', '5', '2');

// function solve() {
//     let input = [...arguments];
//     // let input2 = [...arguments];
//     //let command = input.shift();
//     let playerOne = input.shift();
//     let playerTwo = input.shift();
//     let totalOne = 0;
//     let totalTwo = 0;
//     // let command = input2.shift();
//     let command = input.shift();
//     while (command !== "End of game") {
//         let currentCardOne = Number(command);
//         let currentCardTwo = Number(input.shift());

//         if (currentCardOne > currentCardTwo) {
//             totalOne += currentCardOne - currentCardTwo;

//         } else if (currentCardOne < currentCardTwo) {
//             totalTwo += currentCardTwo - currentCardOne;
//         }

//         else if (currentCardOne === currentCardTwo) {
//             console.log("Number wars!");

//             currentCardOne = Number(input.shift());
//             currentCardTwo = Number(input.shift());

//             // if (totalOne > totalTwo) {
//             if (currentCardOne > currentCardTwo) {
//                 console.log(playerOne + " is winner with " + (totalOne) + " points");
//             } else {
//                 console.log(playerTwo + " is winner with " + (totalTwo) + " points");
//             }
//             break;
//         }

//         command = input.shift();

//         // currentCardOne = Number(input.shift());
//         // currentCardTwo = Number(input.shift());

//         //currentCardNext =Number(input.shift());
//     }

//     if (command === "End of game") {
//         console.log(playerOne + " has " + (totalOne) + " points");
//         console.log(playerTwo + " has " + (totalTwo) + " points");
//     }
// }   