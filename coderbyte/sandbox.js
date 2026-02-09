const map = new Map();
map.set("a", 1);
map.set("b", 2);
map.set("c", 3);


// console.log(map.entries())
// console.log(map.get("a"));
// console.log(map.size)
// for (let [key, value] of map.entries()) {
//     console.log(key, value)
// }


const theobject = {}
theobject["a"] = 1;
theobject["b"] = 2;

// console.log(theobject)
// console.log(Object.keys(theobject).length)

// for (let key of Object.keys(theobject)) {
//     console.log(key, theobject[key])
// }
const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 9 },
  { name: "bananas", type: "fruit", quantity: 5 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 12 },
  { name: "fish", type: "meat", quantity: 22 },
];

const restock = { restock: true };
const sufficient = { restock: false };
const result = Map.groupBy(inventory, ({ quantity }) =>
//   quantity < 6 ? restock : sufficient,
quantity < 6 ? restock : sufficient,
);

// console.log(result.get(sufficient))
// console.log(result.get(restock))
// [{ name: "bananas", type: "fruit", quantity: 5 }]

for (let item of inventory) {
    if (item.quantity < 6) {
        // console.log(item.name + " restock")
        item.restock = true
    } else {
        // console.log(item.name + " sufficient")
        item.restock = false
    }
}

// console.log(inventory)



// console.log(x)
// const x =5 
// var x = 5  
/* Difference between var, let, const
Hoisting awareness
What to remember:
var → hoisted, initialized to undefined
let / const → hoisted, temporal dead zone

*/

const arr = [1,2,3];
arr.push(4);

const arr2 = arr.map(x => x * 2)

const arr3 = arr.slice(-2)
// console.log(arr3)
// console.log(arr2)

const words = ["spray", "elite", "exuberant", "destruction", "present"];

const result4 = words.filter((word) => word.startsWith("e"));

// console.log(result4);

const result2 = [1,2,3].forEach(x => x * 2);
//  console.log(result2) //undefined
const correctResult = [1,2,3].map(x => x * 2);

const a = { x: 1 };
// console.log(a.x)
const b = a;
// console.log("b.x. ",b.x)    
b.x = 2; // chnaged value of x in b, but since a and b point to the same object, it also changes the value of x in a
// console.log(a.x);

const arrA = [1,2];
const arrB = [...arrA, 3];
// console.log(arrB)

const obj = {
  x: 10,
  getX: () => this.x
};
// console.log(obj.getX()); // undefined  -> Arrow functions do not bind 'this'

function test() {
  return;
}
// console.log(test());