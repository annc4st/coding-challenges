// Inserttion sort  O(n^2) Time and O(1) Space
let arr = [12, 11, 13, 5, 6];

function insertionSort(arr) {
    let n = arr.length;

    for (let i=1; i < n; i++) {
        let key = arr[i];
        console.log('key: ', key);
        let j = i - 1;
        console.log('j: ', arr[j]);

          /* Move elements of arr[0..i-1], that are
           greater than key, to one position ahead
           of their current position */

        while (j>= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
              } 
        arr[j + 1] = key;// insert key value on the positon j+1 / i
        }
    return arr;
}
// console.log(insertionSort(arr));
// console.log(arr);

let fArr = [ 1, 3, 5, 8];

fArr[2] = fArr[1];
console.log(fArr);