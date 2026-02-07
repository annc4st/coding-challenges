/* You are given an array arr[], the task is to return a list elements of arr in alternate order (starting from index 0).

Examples:

Input: arr[] = [1, 2, 3, 4]
Output: 1 3
Explanation:
Take first element: 1
Skip second element: 2
Take third element: 3
Skip fourth element: 4
Input: arr[] = [1, 2, 3, 4, 5]
Output: 1 3 5
Explanation:
Take first element: 1
Skip second element: 2
Take third element: 3
Skip fourth element: 4
Take fifth element: 5
Constraints:
1 <=  arr.size <= 105
1 <= arr[i] <= 105

Time Complexity: O(n)
Auxiliary Space: O(1)
*/

function alternatesInArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push(arr[i]);
  }
  return result;
}

console.log(alternatesInArray([1, 2, 3, 4])); // [1,3]
console.log(alternatesInArray([1, 2, 3, 4, 5])); // [1,3,5]

/* Time complexity analysis

Let n = arr.length.

Loop runs for indices: 0, 2, 4, 6, ...

Number of iterations ≈ n / 2

In Big-O:

O(n / 2) → O(n)


Big-O ignores constant factors. */

// space complexity >> O(1) to modify - print values , no storing in array

function alternatesInArrayPrint(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    console.log(arr[i]);
  }
}

console.log(alternatesInArrayPrint([1, 2, 3, 4])); // [1,3]
console.log(alternatesInArrayPrint([1, 2, 3, 4, 5])); // [1,3,5]
