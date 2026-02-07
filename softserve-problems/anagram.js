function isAnagram(s1, s2) {
   
    if (s1.length > s2.length) {
        return false;
    }

    let fString = s1.split('');
    let secondString = s2.split('');
  
    let indices = [];
    for(let i=0; i<fString.length; i++){
        console.log(secondString.indexOf(fString[i]))
        let index = secondString.indexOf(fString[i]);
        if(index !== -1){
            indices.push(index); 
           
            // Remove the matched letter from secondString to avoid duplicate matching
            secondString[index] = null; 
        } else {
            return false
        }
    } 
        indices.sort((a, b) => a - b);
        for (let i = 1; i < indices.length; i++) {
            if (indices[i] - indices[i - 1] !== 1) {
                return false;
            }
        }
    
    return true
}

const fstring = "car";
const second = "race";
console.log(isAnagram(fstring, second))

module.exports = isAnagram;