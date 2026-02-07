// Given an array of strings groupe anagrams together

// input : ["eat", "tea", "tan", "ate", "nat", "bat"]
// output : [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

function groupAnagrams(strs) {
  let map = new Map();

  for (const word of strs) {
    const key = word.split("").sort().join(""); // k log k sorting chars inside word

    // console.log("key:", key);
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }

  //   console.log(map.values());
  console.log(map.get("aet")); // ["eat", "tea", "ate"]

  return Array.from(map.values());
}

/* REALLY LONG solutioon and coplexity O(n^2) */

//   for (const word of strs) {
// console.log("word:", word);
// now we need to run through array and to find anagrams in the array
// anagrams for the word
// while we find suitable words that are anagrams, we remove them from original array strs

// let anagrams = new Set();
// for (let candidate of strs) {
//   if (isAnagram(word, candidate)) {
//     anagrams.add(candidate);
//   }
//   //remove anagrams at this point to avoid duplicates
// }

//convert to array
// const anagramsArray = Array.from(anagrams);
// //try spread operator
// const anagramsArray = [...anagrams];
// console.log("anagramsArray:", anagramsArray);
// results.set(anagramsArray);
// results.push(anagramsArray);
//   }
//   return Array.from(results);
//   return results;
// }

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

//Valid Anagram
/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

Constraints:
1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters. */

// O(n^2) solution
// function isAnagram(s, t) {
//   if (s.length !== t.length) return false;

//   for (let char in s) {
//     if (!t.includes(s[char])) return false;
//   }
//   return true;
// }

// O(n) solution
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const charCount = {};

  for (let i = 0; i < s.length; i++) {
    // console.log(charCount);
    // console.log(s[i], t[i]);
    charCount[s[i]] = (charCount[s[i]] || 0) + 1;
    charCount[t[i]] = (charCount[t[i]] || 0) - 1;
  }

  for (const key in charCount) {
    if (charCount[key] !== 0) return false;
  }

  return true;
}

// console.log(isAnagram("ate", "tea")); // true
// console.log(isAnagram("ate", "bea")); // false
// console.log(isAnagram("ate", "ttea")); // false
