/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {
  let length = grid.length;
  let width = grid[0].length;
  let guer = [];
  let count = 0;
  let allsum = 0;
  for (let i = 0; i< length;i++) {
      let hasServer = -1;
      for(let j = 0; j< width;j++) {
          if (grid[i][j] ==1) {
              if (hasServer > -1) {
                  hasServer = -1;
                  j = width;
              } else {
                  hasServer = j;
              }
          }
      }
      
      guer.push(hasServer);
  }
  let sumColumn = [];
  
  for (let j = 0; j<width;j++) {
      let sum = 0;
      for (let i = 0; i<length ; i++) {
          sum += grid[i][j];
      }
      allsum += sum;
      sumColumn.push(sum)
  }
  for (let i = 0; i < guer.length;i++){
      if(guer[i] != -1 && sumColumn[guer[i]] == 1) {
          count ++;
      }
  }
  return allsum - count;
};
