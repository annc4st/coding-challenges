/* Write a function that will return the count of distinct case-insensitive 
alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/

// function duplicateCount(text){

//     let seen = {}
//     let str = text.toLowerCase()
//     for (let i=0; i<str.length; i++) {
//         let curChar = str[i];
//         if(!seen[curChar]){
//             seen[curChar] = 1
//         } else {
//             seen[curChar]++
//         }
//     }
//     let result=0

//     for (let key in seen) {
//         if (parseInt(seen[key]) > 1){
//             result+= 1;
//         }
//     }
//     return result
//   }

function duplicateCount(text){
    console.log(text.toLowerCase().split('').sort().join(''))
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }
  console.log(duplicateCount("aabbcde"))