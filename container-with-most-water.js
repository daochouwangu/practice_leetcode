/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let length = height.length;
  let max = 0;
  let inMax = 0;
  for(let i = 0; i< length; i++){
      if(height[i] > inMax) {
          inMax = height[i];
      }
  }
  for (let i = length - 1,j = 0; j < i; ){
      if ((i - j) * inMax < max) {
          return max;
      }
      const now = (i - j) * Math.min(height[j], height[i])
      if (now > max) {
          max = now;
      } 
      if(height[j] > height[i]){
          i--;
      } else {
          j++;
      }
  }
  return max;
};
