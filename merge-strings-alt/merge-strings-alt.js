// 1768. Merge strings alternately
/* you are given two strings word1 and word2. Merge the strings by adding
 letters in alternating order, starting with word1. 
 If a string is longer than the other, append the additional 
 letters onto the end of the merged string.
*/
/*
Input: word1 = "abc", word2 = "pqr"
output: "apbqcr"
Explanation :
The merged string will be merged as follows :
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/

//example 2:
/*
Input: word1 = "ab", word2 = "pqrs"
output: "apbqrs"
Explanation :
word1:  a   b
word2:    p   q   r   s
merged: a p b q r s
*/

function mergeAlternately(word1, word2) {
  let result = "";
  let maxLength = Math.max(word1.length, word2.length);
  //   console.log("maxLength:", maxLength);

  for (let i = 0; i < maxLength; i++) {
    // merged += word1[i] + word2[i];

    // if (word1[i] === undefined) merged = merged.replace("undefined", "");
    // if (word2[i] === undefined) merged = merged.replace("undefined", "");

    if (i < word1.length) result += word1[i];

    if (i < word2.length) result += word2[i];
  }

  return result;
}

console.log(mergeAlternately("abc", "pqr")); //apbqcr
console.log(mergeAlternately("ab", "pqrs")); //apbqrs
