/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/** 
 * 解法一： 时间复杂度 On 空间复杂度 On
 * 建一个数组直接用算法获得对应的值
var rotate = function(nums, k) {
    let length = nums.length;
    if (length < 2 || k == 0) {
        return nums;
    }
    let arr = []
    for (let i in nums) {
        arr[i] = nums[(length + i - k )% length];
    }
    for (let i in nums) {
        nums[i] = arr[i]
    }
    return arr;
};
/**
 * 解法2： 时间复杂度O(n),空间复杂度O(n)
 * 走马灯，滑动窗口一样，再前面拼接自己，再向前滑动k个
 * 例如： 1234567 k=3
 * 1234567[1234567]
 * 向前滑动三个 1234[5671234]567
var rotate = function(nums, k) {
    let length = nums.length;
    let newk = k % length;
    if (length < 2 || newk == 0) {
        return nums;
    }
    let newarr = [...nums,...nums]
    let j = 0
    for (let i=length-newk;i<2*length - newk;i++ ) {
        nums[j++] = newarr[i]
    }
    return nums;
}
*/
/**
 * 解法3：时间复杂度：O(n),空间复杂度:O(1)
 * 1234567 反转
 * 7654321 前k个反转， k后面再反转
 * 5671234 
 * @param {*} nums 
 * @param {*} k 
 */
var rotate = function(nums, k) {
  let length = nums.length;
  let newk = k % length;
  if (length < 2 || newk == 0) {
      return nums;
  }
  let start = 0
  let end = length - 1;
  reverse(nums, start, end);
  reverse(nums, start, newk - 1);
  reverse(nums, newk, end);
}
var reverse = function(nums, start, end) {
  while(start != end && start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start ++;
      end --;
  }
  return;
}
