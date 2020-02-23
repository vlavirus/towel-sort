
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let matrix_sort = [];
    if ( Array.isArray(matrix) == true ) {
      for ( let row = 0; row < matrix.length; row++ ) {
        if ( row % 2 == 0 ) {
          for( let column = 0; column < matrix[row].length; column++ ) {
            matrix_sort.push(matrix[row][column]);
          }
        } else {
          for ( let column = matrix[row].length - 1 ; column >= 0 ; column-- ) {
            matrix_sort.push(matrix[row][column]);
          }
        }
      }
    }
  return matrix_sort;
}
