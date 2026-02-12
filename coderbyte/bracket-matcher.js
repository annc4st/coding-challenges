/* Bracket Matcher
Have the function BracketMatcher(str) take the str parameter being passed and return 1 
if the brackets are correctly matched and each one is accounted for. Otherwise return 0. 

For example: if str is "(hello (world))", then the output should be 1, 
but if str is "((hello (world))" the the output should be 0 because 
the brackets do not correctly match up. 
Only "(" and ")" will be used as brackets. If str contains no brackets return 1.
Examples
Input: "(coder)(byte))"
Output: 0
Input: "(c(oder)) b(yte)"
Output: 1
*/

function bracketMatcher (str) {
    if (!str.match(/[()]/g)) return 1
    /* let rigthCounter = 0
    let leftCounter = 0

    for ( let i = 0; i < str.length; i++) {
        if (str[i] === "(") {
            leftCounter++
        } else if (str[i] === ")") {
            rigthCounter++
        }  
        if (rigthCounter > leftCounter) return 0
    }
    return rigthCounter === leftCounter ? 1 : 0 */

    //2nd solution
    let counter  = 0
    for ( let i = 0; i < str.length; i++) {
        if (str[i] ===")"){
            counter--
        }
        if (str[i] === "(") {
            counter++
        }
        if (counter < 0) return 0
    }
    return counter === 0 ? 1 : 0
}

console.log(bracketMatcher("(coder)(byte))")); // 0
console.log(bracketMatcher("(hello (world))")); //1
console.log(bracketMatcher("(c(oder)) b(yte)")); // 1
console.log(bracketMatcher("code")); //1
