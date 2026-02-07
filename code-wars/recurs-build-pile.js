/*
Your task is to construct a building which will be a pile of n cubes. 
The cube at the bottom will have a volume of n^3, the cube above will have volume of  (n-1) ^3  ,
 and so on until the top which will have a volume of 1^3
 

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
 
n^3 + (n-1)^3 + (n-2)^3+ ... + 1 = m i =m if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1
*/

// function findNb(m, n=1) {
 
//  // Base case: when m becomes 0, return the current n
//   if (m ===0 ) {
//     return n-1
//   } 
// // Recursive case: subtract the sum of cubes up to 
// // the current level and call the function with the updated m and n
// const sumOfCubes = n * (n + 1) / 2; // Sum of cubes formula: 1^3 + 2^3 + ... + n^3 = (n * (n + 1) / 2)^2
// if (m >= sumOfCubes) {
//     return findNb(m - sumOfCubes, n + 1);
// } else {
//     // If m becomes negative, there is no such n
//     return -1;
// }
// }

// other solution
function findNb(m) {
    let n =0
    while( m > 0) {
        m -= ++n**3
    }
    return m ? -1 : n
    
}

console.log(findNb(1071225))

//3
function findNb(m) {
    let n = 0;
    let sum = 0;
    while (sum < m) {
      n++;
      sum += Math.pow(n, 3);
    }
    return sum === m ? n : -1;
  }