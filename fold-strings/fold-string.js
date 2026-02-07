// Please do not change the name of this function
function reverse(str) {
  if (str.length < 2) return str;
  return str.slice(-1) + reverse(str.slice(0, -1));
}

function foldString(str) {

  let reversedWord;
  let part1;
  let part2;


  let result = [];
  const words = str.split(' ');
  console.log(words)
  let len = Math.floor(words[0].length/2)
  
  if (words.length ===1){

    if(words[0].length % 2 === 0) {
      part1 =  reverse(words[0].slice(0, words[0].length/2))
      part2 = reverse(words[0].slice(words[0].length/2))
      reversedWord = (part1+part2)
      result.push(reversedWord)

    } else if (words[0].length % 2 !==0){
      let middle = words[0][len]
      part1 = reverse( words[0].slice(0, words[0].length/2 ))
      part2 = reverse(words[0].slice(words[0].length/2 +1))
      reversedWord = (part1+middle+part2)

      result.push(reversedWord)

    }

    ///if string contains few words - recursively
  } else {
    
    for (let i of words) {
      result.push(foldString(i))
    }
  }
 
  return result.join(' ');

}

console.log(foldString("Northcoders"))

module.exports = {reverse, foldString}
