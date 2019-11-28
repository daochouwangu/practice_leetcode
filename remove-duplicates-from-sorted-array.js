/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == 0) return 0;
    let cur = 0;
    let length = nums.length
    for (let i=1;i<nums.length;i++) {
        if(nums[i] == nums[cur]) {
            length--;
        } else {
            nums[cur + 1] = nums[i]
            cur ++;
        }
    }
    return length;
};
