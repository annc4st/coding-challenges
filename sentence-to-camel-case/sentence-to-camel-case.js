// Please do not change the name of this function
function sentenceToCamelCase(sentence, bool) {
  let wordArr = [];
  wordArr = sentence.split(" ");

  if (bool === true) {
    /// if first word first letter is capitalized then
    if (wordArr[0].charAt(0) === wordArr[0].charAt(0).toUpperCase()) {
      for (let i = 1; i < wordArr.length; i++) {
        wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].substring(1);
      }
    } else {
      // if first word first letter is not capitalized then
      for (let i = 0; i < wordArr.length; i++) {
        wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].substring(1);
      }
    }

    /**********************/
  } else {
    //(bool ===false)
    if (wordArr[0].charAt(0) === wordArr[0].charAt(0).toUpperCase()) {
      wordArr[i] = wordArr[i][0].toLowerCase() + wordArr[i].substring(1);

      for (let i = 1; i < wordArr.length; i++) {
        wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].substring(1);
      }
    } else {
      for (let i = 1; i < wordArr.length; i++) {
        wordArr[i] = wordArr[i][0].toUpperCase() + wordArr[i].substring(1);
      }
    }
  }
  return wordArr.join("");
}

function camelToEnglish(str) {
  let result = str.replace(/([A-Z])/g, " $1");

  // let wordArr = [];
  // wordArr = result.split(" ");
  // let newWordArr = [];

  // // first letter of the first word
  // if (wordArr[0].charAt(0) === wordArr[0].charAt(0).toLowerCase()){
  //   newWordArr.push(wordArr[0].charAt(0).toUpperCase() + wordArr[0].substring(1));
  // } else {
  //   newWordArr.push(wordArr[0])

  // }

  // for (let i = 1; i < wordArr.length; i++){
    
  //   wordArr[i] = wordArr[i].charAt(0).toLowerCase() + wordArr[i].substring(1).toLowerCase();
  //   newWordArr.push(wordArr[i])
  // }
  
  // let newResult =  newWordArr.join(' ') + "."
//

// because all other letters (but first) are lowercase we can use
  result = result.charAt(0).toUpperCase() + result.substring(1).toLowerCase() + ".";
 
  return result

}
console.log(camelToEnglish("thisBiggerStrangeSentence"))


module.exports = {sentenceToCamelCase, camelToEnglish};
