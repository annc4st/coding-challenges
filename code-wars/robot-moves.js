// Given a robot which can only move in four directions, UP(U), DOWN(D), LEFT(L), RIGHT(R). 
// Given a string consisting of instructions to move. 
// Output the coordinates of a robot after executing the instructions. Initial position of robot is at origin(0, 0).

/*
Input : move = "UDDLRL" 
Output : (-1, -1)

Explanation:
    Move U : (0, 0)--(0, 1)
    Move D : (0, 1)--(0, 0)
    Move D : (0, 0)--(0, -1)
    Move L : (0, -1)--(-1, -1)
    Move R : (-1, -1)--(0, -1)
    Move L : (0, -1)--(-1, -1)
    Therefore final position after the complete
    movement is: (-1, -1)

Input : move = "UDDLLRUUUDUURUDDUULLDRRRR"
Output : (2, 3)
*/
function finalPosition(move) {
    let countUp = 0
    let countDown = 0
    let countLeft = 0
    let countRight = 0
    

    for (let i = 0; i < move.length; i++) {

        if(move[i] ==='U'){
            countUp ++;
        } else if(move[i] ==='D'){
            countDown ++;
        } else if(move[i] ==='L'){
            countLeft ++;
        } else if (move[i] ==='R'){
            countRight++;
        }

    }
    console.log(countUp, countDown, countLeft, countRight)
    let final_y = countUp - countDown
    let final_x = countRight - countLeft
    let final_coords = {final_x, final_y}

    return final_coords
}
console.log(finalPosition("UDDLLRUUUDUURUDDUULLDRRRR"))