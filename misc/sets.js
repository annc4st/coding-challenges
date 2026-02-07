let s1 = new Set([1, 2, 3, 4, 5]);
console.log(s1);

s1.add(7);
// console.log(s1);

// for (let item of s1) {
//   console.log(item);
// }
const iteratingset = s1.values();
console.log(iteratingset.next().value);
console.log(iteratingset.next().value);
