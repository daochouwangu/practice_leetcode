/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {
  let pre = 0;
  let dfs = (node) => {
      if(node.right) dfs(node.right);
      node.val += pre
      pre = node.val
      if(node.left) dfs(node.left);
  }
  dfs(root);
  return root;
};
