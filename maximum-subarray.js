/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let cur = nums[0], max = nums[0];
    for(let i = 1; i < nums.length; i++) {
        if(cur > 0) {
            cur += nums[i];
        } else {
            cur = nums[i]
        }
        max = Math.max(cur, max);
    }
    return max
};
