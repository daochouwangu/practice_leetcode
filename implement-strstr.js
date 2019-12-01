/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(!needle || needle.length == 0){
      return 0;
  }
  if (!haystack || haystack.length == 0){
      return -1
  }
  let length = needle.length
  for (let i = 0; i < haystack.length; i++){
      if(haystack[i] === needle[0] && haystack.substring(i, i+length) == needle) {
          return i
      }
  }
  return -1;
};
