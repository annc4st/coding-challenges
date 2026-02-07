// Please do not change the name of this function
function rotateArray (arr, num) {
  if(num == 0) return arr;
  
  let newArr = []
  if(num === 1){
    for(let i = 0; i < arr.length; i++) {
      newArr.push(arr[i-num]);
    }

  }
  return newArr;
};


console.log(rotateArray([1, 2, 3], 1))
module.exports =  rotateArray;


/*
he function takes two arguments, an array and a number, and always returns an array.

Examples
Here are some examples to help you build out your test suite:

If the number is zero return the array unchanged.
rotateArray([1, 2, 3], 0);
// should return [1,2,3]
If the number is positive return the array rotated x times to the right
rotateArray([1, 2, 3], 1);
// should return [3, 1, 2]*/