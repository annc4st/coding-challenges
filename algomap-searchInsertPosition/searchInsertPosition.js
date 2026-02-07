// 35. Search Insert Position

// Given a sorted array of distinct integers and a target value, return the index if the target is found. 
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

var searchInsert = function(nums, target) {
    let leftInd = 0;
    let rightInd = nums.length -1;

    while (leftInd <= rightInd) {
        let middleInd = leftInd + Math.floor(( rightInd - leftInd ) /2 );
        
        if ( nums[middleInd] === target){
            return middleInd
        }
        if (nums[middleInd] > target ){
            rightInd = middleInd -1
        } else {
            leftInd = middleInd +1
        }
    }
    return leftInd

}

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
