/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let MAX = Math.pow(2,31)
  if(typeof(x) != "number" || x != parseInt(x)) {
      // 报错
      throw Error("The reverse Argument must be integer");
  }
  let result = 0;
  // 各位数的数组
  let bitNum = [];
  for(let i = x; i != 0; i = parseInt(i / 10)) {
      bitNum.push(i % 10);
  }
  for(let i of bitNum) {
      result = result * 10 + i
      // 超过范围判定
      if (result > MAX - 1 || result < -MAX) {
          return 0;
      }
  }
  return result;
};
