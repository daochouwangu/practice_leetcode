/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length === 0) return [];
    let result = [];
    p(0, [])
    function p(index, curResult){
        if(index === nums.length) {
            result.push(curResult);
            return ;
        }
        for(let i = index; i<nums.length;i++){
            [nums[i], nums[index]] = [nums[index], nums[i]];
            p(index + 1, [...curResult, nums[index]]);
            [nums[i], nums[index]] = [nums[index], nums[i]];
        }
    }
    return result;
};
