/**
 * @isBest false
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false;
  let arr = []
  for(let s = x;s != 0; ){
      let m = s %10;
      arr.push(m)
      s = parseInt(s/10);
  }
  for(let i = 0,j=arr.length-1; i< arr.length && i <= j; i++, j--){
      if(arr[i] != arr[j]) {
          return false;
      }
  }
  return true;
};
