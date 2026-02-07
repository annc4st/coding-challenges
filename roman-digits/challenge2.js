// function solution(input) {
//     let seen = {};

const { typeOf } = require("react-is")

//     for (let i = 0; i <input.length; i++) {
//         let currentChar = input[i];

//         if (seen[currentChar]) {
//            seen[currentChar] ++;
     
//         } else {
//             seen[currentChar] = 1;
//             console.log("seen line 21 ", seen)
//         }
//     }
//     let number_duplicates = 0
//     for (const property in seen) {
//         if(seen[property] >=2)
//         number_duplicates++;
//       }
//     return number_duplicates
// }

// console.log(solution("Aasdeeeesfcgh!!!"))

// function solution(input){
//     let  arr = input.split('')

//     let digits = []
//     for (let i =0; i<arr.length; i++){
//         if (typeof parseInt(arr[i]) === 'number' && !isNaN(parseInt(arr[i]))){
//             digits.push(arr[i])
//         }
//     }
//     if (digits.length <=1) {
//         return -1
//     }

//     let descend = digits.sort().reverse()
//     console.log(descend)

//     return descend[1]
// }

// console.log(solution("abc:123123"))

function solution(instructions) {
    let x = 0; // Initial x-coordinate
    let y = 0; // Initial y-coordinate
    let isFacingRight = true; // Initial direction

//     for (let i = 0; i < instructions.length; i++) {
//         let instruction = instructions[i];

//         if (instruction === 'F') {
//             // Move one step in the current direction
//             if (isFacingRight) {
//                 x++;
//             } else {
//                 x--;
//             }
//         } else if (instruction === 'R') {
//             // Turn right (change direction)
//             isFacingRight = true;
//         } else if (instruction === 'L') {
//             // Turn left (change direction)
//             isFacingRight = false;
//         }
//     }

//     // Calculate the minimum movements to return to the initial position
//     return Math.min(Math.abs(x), instructions.length + Math.abs(x));
// }
/**** */
    // let d = instructions.match(/LF|RF|F|R/g) || [];
    // return d

}

// function minCommandsToReturn(input) {
//     let leftCount = 0;
//     let rightCount = 0;
//     let forwardCount = 0;

//     for (let i = 0; i < input.length; i++) {
//         switch (input[i]) {
//             case 'L':
//                 leftCount++;
//                 break;
//             case 'R':
//                 rightCount++;
//                 break;
//             case 'F':
//                 forwardCount++;
//                 break;
//             default:
                 
//                 break;
//         }
//     }
//     console.log(leftCount, rightCount, forwardCount)
//     console.log(leftCount- rightCount)
//     // Calculate the minimum number of commands needed to return to the starting point
//     return Math.abs(leftCount - rightCount) + Math.ceil(forwardCount);
// }



function minCommandsToReturn(input) {
    let turnsCounter = 0;
    let forwardCount = 0;

    for (let i = 0; i < input.length; i++) {
        switch (input[i]) {
            case 'L':
                turnsCounter--;
                break;
            case 'R':
                turnsCounter++;
                break;
            case 'F':
                forwardCount++;
                break;
            default:
                // Ignore other characters
                break;
        }

        // Normalize turnsCounter to ensure it stays within the range of -4 to 3
        // turnsCounter = (turnsCounter + 4) % 4;
        // console.log("turns ", turnsCounter)
    }
    // turnsCounter = (turnsCounter + 4) % 4;
    console.log("turns ", turnsCounter)
    console.log("fw ", forwardCount)

    // Calculate the minimum number of commands needed to return to the starting point
    return (4 -turnsCounter ) + Math.ceil(forwardCount / 2)
    // return Math.max(Math.ceil(Math.abs(turnsCounter) / 2), forwardCount);
}

// Test case
// console.log(minCommandsToReturn("RF"));
console.log(minCommandsToReturn("LFRFRFR"))