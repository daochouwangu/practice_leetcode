/**
 * 竞赛题
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let sum = 0
  let length = matrix.length
  for(let i in matrix) {
      for (let j in matrix[i]){
          let val = Number(matrix[i][j])
          if (val == 0 || j == 0) {
              sum += val;
              continue;
          }
          matrix[i][j] = matrix[i][j-1] + 1
          val = Number(matrix[i][j])
          if (i == 0) {
              sum ++;
              continue;
          }
          let max = (i >= val - 1) ? Number(val) : Number(i) + 1
          if(max == 1) {
              sum++;
              continue;
          }
          for(let k = 0; k<max-1; k++) {
              let a = matrix[i-k-1][j]
              if(a < max) {
                  max = (a >= k + 1)? a : k+1
              }
              if(a <= k+1){
                  break;
              }
          }
          sum += max ;
      }
  }
  return sum
};
