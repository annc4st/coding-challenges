/*Given an array of positive integers arr[], return the second largest element from the array. 
If the second largest element doesn't exist then return -1.

Note: The second largest element should not be equal to the largest element.

Examples:

Input: arr[] = [12, 35, 1, 10, 34, 1]
Output: 34
Explanation: The largest element of the array is 35 and the second largest element is 34.
Input: arr[] = [10, 5, 10]
Output: 5
Explanation: The largest element of the array is 10 and the second largest element is 5.
Input: arr[] = [10, 10, 10]
Output: -1
Explanation: The largest element of the array is 10 and the second largest element does not exist.
Constraints:
2 ≤ arr.size() ≤ 105
1 ≤ arr[i] ≤ 105

Expected Complexities
Time Complexity: O(n)
Auxiliary Space: O(1)
*/

/* “Sorting is unnecessary here. I can track the largest and second largest values in a single pass.
 Whenever I find a new maximum, I demote the previous maximum to second largest. 
 I explicitly ignore duplicates of the maximum. This achieves O(n) time and O(1) space.” */

function secondLargest(arr) {
   const n = arr.length;

//    arr.sort((a, b) => b - a); //JavaScript sort is O(n log n)
//    console.log("after sorting ", arr);

// let result = -1;
// if (arr[1] < arr[0]) {
//     result =  arr[1];
// } else if (arr[1] == arr[0] && n > 2 && arr[2] < arr[0]) {
//     result = arr[2];
// } 


// let map = {}; // auxiliary spac -> O(n), should be O(1)
let largest = -1;
let secondLargest = -1;
for (let i = 0; i < n; i++) {
    //REMOVE ADDING TDO DICTIONARY
    // if(!map[arr[i]]) {
    //     map[arr[i]] = 1;
    // } else {
    //     map[arr[i]]++;
    // }

     if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }   
}

// console.log("map ", map);

return secondLargest;
}

console.log(secondLargest([12, 35, 1, 10, 34, 1])); //34
console.log(secondLargest([10, 5, 10])); //5
console.log(secondLargest([10, 10, 10])); //-1
console.log(secondLargest([10, 10, 4, 4, 3])); //4