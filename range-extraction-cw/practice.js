// A format for expressing an ordered list of integers is to use a comma separated list of either

const { access } = require("graceful-fs");

// individual integers
// or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
// Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

// Example:

// solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"


const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
  ];
//you want to group these items based on their category value
// 1 First, you call the reduce method and pass an empty object {} as the initial accumulator value:

//2 Next, you check if the accumulator object already 
//has a property with the same name as the category from your item object.

//3 Creating the category inside the accumulator object
// If not, then declare that property as an empty array as follows:

const groupedItems = items.reduce((accum, item) => {
    const category = item.category; 
    //2
    if(!accum[category]){
        accum[category] = []
    }
    accum[category].push(item.name)  //3
    return accum
}, {})


// console.log(groupedItems);

// let’s see how to remove duplicates using the reducer() method:
/*To remove duplicates using the reduce() method, you need to declare an array as the accumulator value.

In each iteration, check if the item is already included in the accumulator using the includes() method.

If the item isn’t already included, push the item into the accumulator. See the example below:*/

const duplicates = [1, 2, 3, 1, 2, 3, 7, 8, 7];

const noDuplicateItems = duplicates.reduce((accumulator, item) => {
    if(!accumulator.includes(item)){
        accumulator.push(item)
    }
    return accumulator

}, [])
// console.log(noDuplicateItems); 

const fruits = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 2 },
    { name: 'Mango', price: 3 },
  ];
  
  const totalPrice = fruits.reduce((acum, item) => {
    acum += item.price;
    return acum;

  }, 0)

//   console.log(totalPrice)
/*
  Array.reduce((accumulator, item, index, array) => {
    // TODO: Define the process for each iteration here
  }, initialAccumulatorValue)
//   The full syntax of the reduce() method
*/


function solution (list) {
    let result = list.reduce((acc, current, i) => {
        //initializes the acc with the first element of the list as a string (curr.toString()).
        if(i ==0) return current.toString();
        //checks if the current element  is in the middle of a range. 
        if(list[i-1] == current -1 && list[i+1] == current+1) return acc;
        //checks if the current element is at the end of a range. 
        if (list[i-2] == current-2 && list[i-1] == current-1) return acc+"-"+current;

        /*If neither of the above conditions is met, 
        it means the current element is an individual number 
        or the start of a new range. 
        It appends the current element to the accumulator with a comma (acc + "," + curr).
        */
        return acc+","+current;
    })
    return result
    
}
let list1 = [-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
console.log(solution(list1))

/*
Improvement
The provided solution has a couple of limitations:

It assumes the input list is always in increasing order.
It may fail on the last element edge case because it does not handle it explicitly.
Here’s an improved version that ensures these edge cases are handled:*/
function solution(list) {
    return list.reduce((acc, curr, i) => {
      if (i === 0) return curr.toString();
      if (list[i - 1] === curr - 1 && list[i + 1] === curr + 1) return acc;
      if (list[i - 2] === curr - 2 && list[i - 1] === curr - 1) return acc + "-" + curr;
      return acc + "," + curr;
    }, '');
  }