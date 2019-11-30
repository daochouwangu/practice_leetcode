/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @submissions 三个指针，两个指向数据末尾，一个指向内存末尾，从后往前存
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let cur = m + n;
    let i = m - 1, j= n - 1
    for(; i >= 0 || j >= 0;) {
        if(nums1[i] > nums2[j] || j < 0) {
            nums1[--cur] = nums1[i--]
        } else {
            nums1[--cur] = nums2[j--]
        }
    }
    return nums1
};
