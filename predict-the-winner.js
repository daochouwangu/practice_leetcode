/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    let length=nums.length;
    let dp = Array(length);
    for(let i = 0; i< length; i++){
        dp[i] = Array(length);
        dp[i][i] = nums[i];
    }
    for(let i=length-1;i>=0;i--){
        for(let j=i+1;j<length;j++){
            dp[i][j] = Math.max(nums[i]-dp[i+1][j],nums[j]-dp[i][j-1]);
        }
    }
    return dp[0][length-1]>=0;
};
