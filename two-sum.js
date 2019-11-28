/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let myMap = new Map()
    for (var i = 0; i < nums.length; i++) {
        if(myMap.has(target - nums[i])) {
            return [i, myMap.get(target - nums[i])]
        }
        myMap.set(nums[i], i)
    }
};
