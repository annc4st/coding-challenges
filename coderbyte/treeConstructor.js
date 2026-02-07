/* Tree Constructor

Have the function TreeConstructor(strArr) take the array of strings stored in strArr, 
which will contain pairs of integers in the following format: (i1,i2), 
where i1 represents a child node in a tree and the second integer i2 signifies that it is the parent of i1. 
For example: if strArr is ["(1,2)", "(2,4)", "(7,2)"], then this forms the following tree:

which you can see forms a proper binary tree. Your program should, in this case, 
return the string true because a valid binary tree can be formed. 
If a proper binary tree cannot be formed with the integer pairs, 
then return the string false. All of the integers within the tree will be unique,
 which means there can only be one node in the tree with the given integer value.
Examples
Input: ["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]
Output: true
Input: ["(1,2)", "(3,2)", "(2,12)", "(5,2)"]
Output: false
*/

function TreeConstructor(strArr) {

    // calculate children of each parent
    //if each parent has more than 2 children -> return false

    let parents = new Map();
    const children = new Set();
    for (let n = 0; n < strArr.length; n++) {
        // const [child, parent]  = strArr[n].match(/\d+/g).map(Number)
        const [child, parent] = strArr[n].replace(/[()]/g, '').split(',').map(Number)
 // Rule 1: a child can have only one parent
    if (children.has(child)) return false;
    children.add(child);
     // Rule 2: a parent can have at most two children
        // if (parents.has(parent)) {
        //     parents.set(parent, parents.get(parent) + 1)
        // } else {
        //     parents.set(parent, 1)
        // }
        parents.set(parent, (parents.get(parent) || 0) + 1);
        if (parents.get(parent) > 2) return false;  

    }
    // for (let [key, value] of parents.entries()) {
    //     if (value > 2) {
    //         return false;
    //     }
    // }
    return true
}

console.log(TreeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]))
console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"])) 
console.log(TreeConstructor(["(1,2)", "(1,3)"]))