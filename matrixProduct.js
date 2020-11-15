// MATRIX PRODUCT

const matrixProduct = (matrix1, matrix2) => {
  // the first value needs to be matrix1[0][0] * matrix2[0][0] + matrix1[0][1] * matrix2[1][0]
  // the second value needs to be matrix1[0][0] * matrix2[0][1] + matrix1[0][1] * matrix2[1][1]
  // then start a new array
  // the third value needs to be matrix1[1][0] * matrix2[0][0] + matrix1[1][1] * matrix2[1][0]
  // the fourth value needs to be matrix[1][0] * matrix2[0][1] + matrix[1][1] * matrix2[1][1]

  /*
  1st map iteration
  rowA = [1, 2, 1]
      1 map iteration
      colBIndex = 0 // matrixB has 2 rows so indexes are either 0 or 1
          1 reduce
          acc = 0
          itemA = 1
          rowBIndex = 0
          acc = 0 + 1 * 2 = 2
          2 reduce
          acc = 0
          itemA = 2
          rowBIndex = 1
          acc = 0 + 2 * 6 = 12
          3 reduce
          acc = 0
          itemA = 1
          rowBIndex = 2
          acc = 0 + 1 * 1 = 1
  
      2 map iteration
      colBIndex = 1
          1 reduce
          acc = 0
          itemA = 1
          rowBIndex = 0
          acc = 0 + 1 * 5 = 5
          2 reduce
          acc = 0
          itemA = 2
          rowBIndex = 1
          acc = 0 + 2 * 7 = 14
          3 reduce
          acc = 0
          itemA = 1
          rowBIndex = 2
          acc = 0 + 1 * 8 = 8
  
  
  2nd map iteration
  rowA = [0, 1, 0]
      1 map iteration
      colBIndex = 0 // matrixB has 2 rows so indexes are either 0 or 1
          1 reduce
          acc = 0
          itemA = 1
          rowBIndex = 0
          acc = 0 + 0 * 2 = 0
          2 reduce
          acc = 0
          itemA = 2
          rowBIndex = 1
          acc = 0 + 1 * 6 = 6
          3 reduce
          acc = 0
          itemA = 1
          rowBIndex = 2
          acc = 0 + 0 * 1 = 0
  
      2 map iteration
      colBIndex = 1
          1 reduce
          acc = 0
          itemA = 1
          rowBIndex = 0
          acc = 0 + 0 * 5 = 0
          2 reduce
          acc = 0
          itemA = 2
          rowBIndex = 1
          acc = 0 + 1 * 7 = 7
          3 reduce
          acc = 0
          itemA = 1
          rowBIndex = 2
          acc = 0 + 0 * 8 = 0
  
  3rd map iteration
  rowA = [2, 3, 4]
      1 map iteration
      colBIndex = 0 // matrixB has 2 rows so indexes are either 0 or 1
          1 reduce
          acc = 0
          itemA = 1
          rowBIndex = 0
          acc = 0 + 2 * 2 = 4
          2 reduce
          acc = 0
          itemA = 2
          rowBIndex = 1
          acc = 0 + 3 * 6 = 18
          3 reduce
          acc = 0
          itemA = 1
          rowBIndex = 2
          acc = 0 + 4 * 1 = 4
  
      2 map iteration
      colBIndex = 1
          1 reduce
          acc = 0
          itemA = 1
          rowBIndex = 0
          acc = 0 + 2 * 5 = 10
          2 reduce
          acc = 0
          itemA = 2
          rowBIndex = 1
          acc = 0 + 3 * 7 = 21
          3 reduce
          acc = 0
          itemA = 1
          rowBIndex = 2
  acc = 0 + 4 * 8 = 32
  
  */
  return matrix1.map((row1) =>
    matrix2[0].map((_, col2Index) =>
      row1.reduce(
        (acc, itemA, row2Index) => acc + itemA * matrix2[row2Index][col2Index],
        0
      )
    )
  );
};

console.table(
  matrixProduct(
    [
      [1, 2, 1],
      [0, 1, 0],
      [2, 3, 4],
    ],
    [
      [2, 5],
      [6, 7],
      [1, 8],
    ]
  )
);

module.exports = {
  matrixProduct,
};
