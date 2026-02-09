/* Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true
Example 2:
Input: s = "rat", t = "car"
Output: false
Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/

export default function isAnagram(s, t) {
    // return s.split('').sort().join('') === t.split('').sort().join('')

    if (s.length !== t.length) return false

    let sMap = new Map()
    let tMap = new Map()
    for (let i=0; i<s.length; i++) {
        let sChar = s[i]
        let tChar = t[i]
        sMap.set(sChar, (sMap.get(sChar) || 0) + 1)
        tMap.set(tChar, (tMap.get(tChar) || 0) + 1)
    }

    for (let [key, value] of sMap.entries()) {
        // console.log(key, value)
        if (tMap.get(key) !== value) {
            // console.log(tMap.get(key) !== value + " " + key)
            //IF THE value of the key from s is missing in t map
            return false
        }
    }

   /* const sCount = {};
    const tCount = {};
 
    for (const char of s) {
        sCount[char] = (sCount[char] || 0) + 1;
    }
 
    for (const char of t) {
        tCount[char] = (tCount[char] || 0) + 1;
    }
 
    for (const key in sCount) {
        if (sCount[key] !== tCount[key]) {
            return false;
        }
    }
    */
    return true
}

console.log(isAnagram("anagram", "nagaram")) //true
console.log(isAnagram("rat", "car")) //false