/*

You are working on a video game where the player has to go through a level without falling into any obstacles.

The player starts at position zero and can move in three ways:
- L (left)  => one position to the left
- R (right) => one position to the right 
- J (jump)  => move two positions, in the direction of the previous move

The player starts at position 0 and the exit will always be at position 10.

The instructions never lead the player outside the level boundaries, and the first move is always right.

Write a function that given the instructions and the positions of the obstacles, returns True if the instructions lead to the exit position, and False otherwise.

For example:

Obstacles 1: [4,6]  

--------------------------------------------------------
  ->                X         X                   Exit
--------------------------------------------------------
0    1    2    3    4    5    6    7    8    9    10  


Instructions 1: "RRRJJRRR" -> True.

                  JUMP      JUMP
-----------------^    ^----^    ^-----------------------
  ->   ->   ->      X         X      ->   ->   -> Exit
--------------------------------------------------------
0    1    2    3    4    5    6    7    8    9    10  

position =10



Instructions 2: "RRRLJ" -> False, it would just lead back to the start.

Instructions 3: "RRRJJRRRL" -> True, extra instructions can be ignored.

Instructions 4: "RRRLRJJRRR" -> True, the player is allowed to move back and forth.

Instructions 5: "RRRRRRRRRR" -> False, due to falling into an obstacle.

Instructions 6: "RRJJJJ" -> False, as the jump would land on an obstacle.

Instructions 7: "RLRRRJJRRLLJJJLRRRJJRRR" -> True, even after many instructions, exit is reached.

Instructions 8: "RRRJJRLJJJRRR" -> False, as directions of jumps must be observed.

Instructions 9: "R" -> False, as the exit position isn't reached.

Instructions 10: "RJJJJR" -> True, as it gets to the exit after avoiding the obstacles.

Instructions 11: "RJJRRRRR" -> False, as it hits an obstacle.

Instructions 12: "RJJRRRJ" -> True, as it avoids all obstacles.

Instructions 13: "RJJJLJRJRJ" -> False, as it jumps to an obstacle.

Obstacles 2: [9,4,2], Instructions 12: "RJJRRRJ" -> True, as it gets to the exit after avoiding the obstacles.

Obstacles 3: [], Instructions 9: -> False

All test cases: 

obstacles_1 = [4,6]
obstacles_2 = [9,4,2]
obstacles_3 = []

level(obstacles_1, instructions_1) # True
level(obstacles_1, instructions_2) # False
level(obstacles_1, instructions_3) # True
level(obstacles_1, instructions_4) # True
level(obstacles_1, instructions_5) # False
level(obstacles_1, instructions_6) # False
level(obstacles_1, instructions_7) # True
level(obstacles_1, instructions_8) # False
level(obstacles_1, instructions_9) # False
level(obstacles_1, instructions_10) # True
level(obstacles_2, instructions_11) # False
level(obstacles_2, instructions_12) # True
level(obstacles_2, instructions_13) # False
level(obstacles_3, instructions_9)  # False

Complexity variables:

N - number of instructions.

*/
"use strict";

const obstacles_1 = [4, 6];
const obstacles_2 = [9, 4, 2];
const obstacles_3 = [];

const instructions_1 = "RRRJJRRR";
const instructions_2 = "RRRLJ";
const instructions_3 = "RRRJJRRRL";
const instructions_4 = "RRRLRJJRRR";
const instructions_5 = "RRRRRRRRRR";
const instructions_6 = "RRJJJJ";
const instructions_7 = "RLRRRJJRRLLJJJLRRRJJRRR";
const instructions_8 = "RRRJJRLJJJRRR";
const instructions_9 = "R";
const instructions_10 = "RJJJJR";
const instructions_11 = "RJJRRRRR";
const instructions_12 = "RJJRRRJ";
const instructions_13 = "RJJJLJRJRJ";

function reachEnd (instructions, obstacles ) {
  let position = 0;
  let direction = 1;
  
  for (let i=0; i< instructions.length; i++) {
    if (instructions[i] == 'R'){
      position++
    //   console.log("this " , position)
      direction = 1
      
    } else if (instructions[i] == "L") {
      position--
      direction = -1
    } else if( instructions[i]=="J" ) {
        if(instructions[i-1] == "R") {
        position +=2
        
        } else if (instructions[i-1] == "L"){
          console.log("dir", direction)
          position += 2*direction
        } else if (instructions[i-1] == "J" && instructions[i-2] == "L") {
          
          position += 2*direction
        }else if (instructions[i-1] == "J" && instructions[i-2] == "R") {
          position += 2
        }
    
    }
    if (obstacles.includes(position)){
      console.log("hit the obstacle at ", position)
      return false
    }
    if(position == 10) {
        console.log("reached the end early")
        return true
    }
  }
  console.log("fin pos", position)
  
if (position < 10) {
  return false
}
}
// console.log(reachEnd("R", obstacles_1)) //9 + [4, 6] //false
// console.log(reachEnd("RRRJJRRR", obstacles_1)) //1 +[4, 6] //true
// console.log(reachEnd("RRRJJRRRL", obstacles_1)) //3 +[4, 6] //true, because extra instructions can be ignored
// console.log(reachEnd("RRRLJ", obstacles_3)) // 2 + []
// console.log(reachEnd("RRRJJRRRLLL", obstacles_1)) //false
// console.log(reachEnd("RLRRRJJRRLLJJJLRRRJJRRR", obstacles_1)) // true


//OPTIMISED SOLUTION
function level(obstacles, instructions, ) {
  let position = 0;
  let direction = 1; // 1 = right, -1 = left
  const obstacleSet = new Set(obstacles);

  for (let move of instructions) {
    if (move === "R") {
      direction = 1;
      position += 1;
    } else if (move === "L") {
      direction = -1;
      position -= 1;
    } else if (move === "J") {
      position += 2 * direction;
    }

    if (obstacleSet.has(position)) {
      return false;
    }

    if (position === 10) {
      return true;
    }
  }

  return false;
}


console.log(level(obstacles_1, instructions_1) ) // # True
// console.log(level(obstacles_1, instructions_2) ) // # False
// console.log(level(obstacles_1, instructions_3) ) // # True
// console.log(level(obstacles_1, instructions_4) ) // # True
// console.log(level(obstacles_1, instructions_5) ) // # False
// console.log(level(obstacles_1, instructions_6) ) // # False
// console.log(level(obstacles_1, instructions_7) ) // # True
// console.log(level(obstacles_1, instructions_8) ) // # False
// console.log(level(obstacles_1, instructions_9) ) // # False
// console.log(level(obstacles_1, instructions_10)) //  # True
// console.log(level(obstacles_2, instructions_11)) //  # False
// console.log(level(obstacles_2, instructions_12)) //  # True
// console.log(level(obstacles_2, instructions_13)) //  # False
// console.log(level(obstacles_3, instructions_9) ) //  # False