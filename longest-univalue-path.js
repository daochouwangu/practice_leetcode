/**
 * @isBest true
 * @number 687
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
var globalMax = 0;
var longestUnivaluePath = function(root) {
    let max = Math.max(digui(root), globalMax)
    globalMax = 0
    return max
};
var digui = function(root){
    if (!root) return 0;
    let l = digui(root.left);
    let r = digui(root.right)

    if (root.left && root.left.val == root.val) {
        l = l+1;
    } else {
        l = 0;
    }
    if (root.right && root.right.val == root.val) {
        r = r+1;
    } else {
        r = 0;
    }
    globalMax = Math.max(l + r, globalMax);
    return Math.max(l , r);
}
