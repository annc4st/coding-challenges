/*The goal of this exercise is to convert a string to a new string where each character 
in the new string is "(" if that character appears only once in the original string, 
or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function duplicateEncode(word){
    // ...
  let seen_chars = {}
  let result='';
  let smallWord = word.toLowerCase();
  for (let w=0; w < smallWord.length; w++) {
    let currentChar = smallWord[w]
    if(!(seen_chars[currentChar])){
     seen_chars[currentChar] =1
    } else {
      seen_chars[currentChar]++
    }
  }

  for (let i=0; i < smallWord.length; i++) {
    if (seen_chars[smallWord[i]] ===1 ){
        result+= '('
    }else {
        result+=')'
    }
  }
  console.log(seen_chars)
  return result
  
}
/*
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/
console.log(duplicateEncode("Success"))
