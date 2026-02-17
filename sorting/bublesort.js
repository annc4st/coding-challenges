//Bubble Sort - O(n^2) Time and O(1) Space
let unsdorted = [5, 2, 9, 1, 4, 6];
let letters = [ 'b', 'd', 'a', 'c' ];
let wordsUnsorted = [ 'banana', 'apple', 'grape', 'orange' ];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                //swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
    
console.log(bubbleSort(unsdorted));
console.log(bubbleSort(letters));
console.log(bubbleSort(wordsUnsorted));