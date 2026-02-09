// 704. Binary Search

//Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

/*
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/

const binSearch = function (nums, target) {
    let leftInd = 0;
    let rightInd = nums.length -1;
    while (leftInd <= rightInd) {
        let middleInd = Math.floor((leftInd + rightInd) /2 );
        if (target === nums[middleInd]){
            return middleInd
        }
        if (target < nums[middleInd]){
            rightInd = middleInd -1
        } else {
            leftInd = middleInd +1
        }
    }
    return -1
}

console.log(binSearch([-1,0,3,5,9,12], 9))
console.log(binSearch([-1,0,3,5,9,12], 2))



const search = function (nums, target) {
    return nums.indexOf(target)
}

// console.log(search([-1,0,3,5,9,12], 9))
// console.log(search([-1,0,3,5,9,12], 2))

const search2 = function (nums, target) {
    for( let i = 0; i < nums.length; i++) {
        if (nums[i] === target){
            return i
        }
    }
    return -1
}

// console.log(search2([-1,0,3,5,9,12], 9))
// console.log(search2([-1,0,3,5,9,12], 2))




