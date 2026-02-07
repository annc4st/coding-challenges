/* You are given an array of integers arr[]. You have to reverse the given array.

Note: Modify the array in place.

Examples:

Input: arr = [1, 4, 3, 2, 6, 5]
Output: [5, 6, 2, 3, 4, 1]
Explanation: The elements of the array are [1, 4, 3, 2, 6, 5]. After reversing the array, the first element goes to the last position, the second element goes to the second last position and so on. Hence, the answer is [5, 6, 2, 3, 4, 1].
Input: arr = [4, 5, 2]
Output: [2, 5, 4]
Explanation: The elements of the array are [4, 5, 2]. The reversed array will be [2, 5, 4].
Input: arr = [1]
Output: [1]
Explanation: The array has only single element, hence the reversed array is same as the original.
Constraints:
1 ≤ arr.size() ≤ 105
0 ≤ arr[i] ≤ 105

Expected Complexities
Time Complexity: O(n)
Auxiliary Space: O(1) */
function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  //   let newArr = [];
  //   while (start < end) {
  //     //swap
  //     newArr[start] = arr[end];
  //     newArr[end] = arr[start];
  //     start++;
  //     end--;
  //   }
  //   return newArr;

  // solution with Space: O(1)

  while (start < end) {
    let tempStart = arr[start]; // value?
    // temp  = start value then start goebecomes end and endvalues takes start position
    // then we add 1 to start and end  position -1 and swp again

    let tempEnd = arr[end];
    arr[end] = tempStart;
    arr[start] = tempEnd;
    start++;
    end--;
  }
  return arr;
}

function solutionWithOneTemp(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let temp = arr[start]; // value?
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }
  return arr;
}

console.log(solutionWithOneTemp([1, 4, 3, 2, 6, 5]));

// console.log(reverseArray([1, 4, 3, 2, 6, 5])); // [5, 6, 2, 3, 4, 1]
