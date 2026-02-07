/* Given an array arr[]. The task is to find the largest element and return it.

Examples:

Input: arr[] = [1, 8, 7, 56, 90]
Output: 90
Explanation: The largest element of the given array is 90.
Input: arr[] = [5, 5, 5, 5]
Output: 5
Explanation: The largest element of the given array is 5.
Input: arr[] = [10]
Output: 10
Explanation: There is only one element which is the largest.
Constraints:
1 <= arr.size()<= 106
0 <= arr[i] <= 106

Expected Complexities
Time Complexity: O(n)
Auxiliary Space: O(1) */

function largestElement(arr) {
  if (arr.length == 1) return arr[0];

  //if allaelements are same
  let allSame = true;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      allSame = false;
      break;
    }
  }
  if (allSame) return arr[0];

  //find largest when all are different
  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(largestElement([22, 33, 1, 8, 150, 7, 56, 90]));
// console.log(largestElement([5, 5, 5, 5])); //5
// console.log(largestElement([10])); //10
