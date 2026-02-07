/* Given an integer array nums of unique elements, return all
possible subsets (power set).
The solution must not contain duplicate subsets.
return the solution in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
Example 2:

Input: nums = [0]
Output: [[],[0]]
    
    Constraints:    
1 <= nums.length <= 10
-10 <= nums[i] <= 10
All the numbers of nums are unique.
*/



function subsets(nums) {
    const result = [];
    let solution = [];

    function backtrack(start) {
        if (start === nums.length) {
            result.push([...solution]);
            return;
        }

        // don't pick nums[start]
        backtrack(start + 1);

        // pick nums[start] 
        solution.push(nums[start]);
        backtrack(start + 1);
        solution.pop();
        
    }

    backtrack(0);
    console.log(result.length);
    return result;
}


console.log(subsets([1]));
console.log(subsets([1,2,3]));


