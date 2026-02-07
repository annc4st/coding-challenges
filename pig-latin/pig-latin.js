// Please do not change the name of this function
function pigLatin(str) {
    
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const words = str.split(' ');

  let firstChar = str.charAt(0).toLowerCase();
  let secondChar = str.charAt(1);
  let output;
  let result = [];


  if(words.length ===1){
    if (!(vowels.includes(firstChar)) && !(vowels.includes(secondChar))) {
      output = str.slice(2) + str.slice(0,2) +'ay' 
      
    } else if (!(vowels.includes(firstChar))){
      output = str.slice(1) + str[0]+'ay'
         
    } else if ((vowels.includes(firstChar))){
      output = str +'way'
 
    }
    result.push(output);  
    // string consists of few words
  } else {
    for (i of words){
      result.push(pigLatin(i))
    }
  }
  
  return result.join(' ')
};

console.log(pigLatin("keep on coding"))

module.exports = pigLatin
