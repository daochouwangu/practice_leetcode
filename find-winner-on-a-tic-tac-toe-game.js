/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  let a = [[0,0,0],[0,0,0],[0,0,0]]
  let b = [[0,0,0],[0,0,0],[0,0,0]]
  for(let j in moves) {
      if(j % 2 == 0) {
          a[moves[j][1]][moves[j][0]] = 1
          if (pending(a)) {
              return "A"
          }
      } else {
          b[moves[j][1]][moves[j][0]] = 1
          if (pending(b)) {
              return "B"
          }
      }
  }
  if(moves.length < 9) {
      return "Pending"
  }
  return "Draw"
};
var pending = function(arr) {
  // 判断横向获胜
  for(let i in arr) {
      if(arr[i][0] == 1 && arr[i][1] == arr[i][2] && arr[i][2] == 1) {
          return true;
      }
  }
  // 判断纵向获胜
  for(let i in arr) {
      if(arr[0][i] == 1 && arr[1][i] == arr[2][i] && arr[2][i]== 1) {
          return true;
      }
  }
  // 判断竖向获胜
  if(arr[0][0] == 1 && arr[1][1] == arr[2][2] && arr[2][2] == 1){
      return true
  }
  if(arr[1][1] == 1 && arr[2][0] == arr[0][2] && arr[0][2] == 1){
      return true
  }
  return false;
}
