/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let sumNums = [];
  let middle1 = (nums1.length + nums2.length) / 2;
  let middle2 = 0;
  if (Math.floor(middle1) == middle1){
      middle2 = middle1;
      middle1 -- ;
  } else {
      middle1 = Math.floor(middle1);
  }
  let n = 0
  let isEmpty = false;
  if (nums1.length == 0) {
      if (middle2 == 0) {
          return nums2[middle1];
      } else {
          return (nums2[middle1] + nums2[middle2]) / 2;
      }
  } 
  if (nums2.length == 0) {
      if (middle2 == 0) {
          return nums1[middle1];
      } else {
          return (nums1[middle1] + nums1[middle2]) / 2;
      }
  }
  outer: for(let m = 0; m < nums1.length;) {
      for(; n < nums2.length;) {
          if (nums1[m] > nums2[n] || isEmpty) {
              sumNums.push(nums2[n++]);
          } else {
              sumNums.push(nums1[m++]);
              if(m == nums1.length) {
                  isEmpty = true;
              } else {
                  break;
              }
          }
      }
      // n已经遍历完,m数组还有剩余
      if (n == nums2.length && m != nums1.length) {
          sumNums.push(nums1[m++]);
      }
      
  }
  if (middle2 == 0) {
      return sumNums[middle1];
  } else {
      return (sumNums[middle1] + sumNums[middle2]) / 2;
  }
};
