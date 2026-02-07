function checkZ(string) {
  //   for (let char of string) {
  //     if (char === "z") {
  //       return true;
  //     }
  //   }
  //   return false;

  return string.includes("z");
}

// console.log(checkZ("abczdef")); // true
// console.log(checkZ("abcdef")); // false

function countZ(string) {
  let count = 0;
  for (let char of string) {
    if (char === "z") {
      count++;
    }
  }
  return count;
}

const myArr = [1, 2, 3, 4, 5];

// myArr.unshift(34);
// let shiftednum = myArr.shift();

// console.log(myArr);
// console.log(shiftednum);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 1, "Lemon", "Kiwi"); // position 2, add Lemon + kiwi and remove one element
// console.log(fruits);

fruits.splice(0, 2); //position 0, remove 2 elements
// console.log(fruits);
