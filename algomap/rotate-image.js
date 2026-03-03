/*The “Rotate Image” problem requires you to rotate an n × n 2D matrix 90 degrees clockwise, in-place.
 This means you must rearrange the values inside the matrix without using extra space for another matrix.
*/

function rotate(matrix) {

    // transpose the matrix using new matrix
//     let newmatrix = [[], [], [] ];
//     for (let i=0; i < matrix.length; i++) {
//         for (let j=0; j < matrix[i].length; j++) {
//             newmatrix[j][i] = matrix[i][j];
//         }
// }

//transpose
    for (let i=0; i < matrix.length; i++) {
        for (let j=i+1; j < matrix[i].length; j++) {
            // let temp = matrix[i][j];
            // matrix[i][j] = matrix[j][i];
            // matrix[j][i] = temp;

           [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
}

//Horizontal flip
    for (let i=0; i < matrix.length; i++) {
        let n = matrix[i].length;
        for (let j=0; j < Math.floor(n / 2); j++) {
            // let temp = matrix[i][j];
            // matrix[i][j] = matrix[i][matrix[i].length - 1 - j];
            // matrix[i][matrix[i].length - 1 - j] = temp;

            [matrix[i][j], matrix[i][matrix[i].length - 1 - j]] = [matrix[i][matrix[i].length - 1 - j], matrix[i][j]];
        }
}

return matrix;


}

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));