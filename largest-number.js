/**
 * @isBest true
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  let arr = []
  for(let i =0 ; i<nums.length;i++){
      arr.push(""+nums[i])
  }
  arr.sort((a,b) => {
      let n = a.length,m=b.length;
      for(let i = 0; i<a.length + b.length;i++) {
          let dif = b.charCodeAt((i)%m) - a.charCodeAt((i)%n)
          if(dif != 0){
              return dif
          }
      }
      return -1;
  });
  let str = arr.join("")
  if(str[0] === '0'){
      return "0"
  }
  return str
};
