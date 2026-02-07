/* Given n pairs of ( ) write a function to generate all combinations 
of well formed parenthesis.

input: n=3
Output: [ "((()))", "(()())", "(())()", "()(())", "()()()" ]

input: n=1
Output: [ "()" ]
*/


function generate_parenthesis (num) {

    let combinationsArray=[]
    let comb = []
   
function backtrack (open, close) {
    if (comb.length === 2*num) {
        combinationsArray.push(comb.join(''))
        return
    }
    if (open < num) {
        console.log("open < num", open < num, "comb: ", comb)
        comb.push('(')
        console.log("comb after push (: ", comb)
        backtrack(open+1, close)
        console.log(" backtrack(open+1, close): ", "open",open, "close", close, comb)
        comb.pop()
        console.log("comb after pop fro ( : ", comb)
    }
    if (close < open) {
        console.log("close < open", close < open, "comb: ", comb)
        comb.push(')')
        console.log("comb after push ): ", comb)
        backtrack(open, close+1)
        console.log("comb after backtrack(open, close+1): ", comb)
        comb.pop()
         console.log("comb after pop fro ): ", comb)
    }
}

backtrack(0,0) // initially we have 0 open and 0 close parentheses

    return combinationsArray
}


console.log(generate_parenthesis(3));