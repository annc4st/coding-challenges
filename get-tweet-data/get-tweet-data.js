// Please do not change the name of this function
function getTweetData (tweet) {
  // Your code here

  let result = {tags: [], mentions: [], tagCount: 0, mentionCount: 0, length : 0};

  let mentionCounter = 0;
  let tagCounter = 0;
  let mentionedWords = [];
  let tags = [];

  let words = tweet.split(' ');
  for (let w of words){
    if (w.startsWith('@')){
      if (!mentionedWords.includes(w)) {
        mentionedWords.push(w)
        mentionCounter++;
      }
    
    }else if (w.startsWith('#')){
      if (!tags.includes(w)) {
        tags.push(w);
        tagCounter++;
      }
    }
  }

  result.tagCount = tagCounter;
  result["tags"] = tags;
  result.mentions = mentionedWords;
  result.mentionCount = mentionCounter;
  result["length"] = tweet.length;
  console.log(result)


  return result;
};

module.exports = getTweetData;
