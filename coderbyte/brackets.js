/*Bracket Combinations
Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero, 
and return the number of valid combinations that can be formed with num pairs of parentheses. 
For example, if the input is 3, then the possible combinations of 3 pairs of parenthesis, 
namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()). 
There are 5 total combinations when the input is 3, so your program should return 5.
Examples
Input: 3
Output: 5
Input: 2
Output: 2
*/

// Catalan numbers

function BracketCombinations(num) { 
let combinationsNumber = 1
if (num < 0) return 0;

if (num <= 1) {
  return num
} else {
  for (let i=1; i < num; i++) {
    combinationsNumber = combinationsNumber * 2 * (2*i +1) / (i+2)
  } 
} 
  return combinationsNumber; 
}
   

console.log(BracketCombinations(readline()));