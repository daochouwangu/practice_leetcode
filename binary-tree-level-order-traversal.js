/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//     let queue = [], result=[];
//     if(!root) return [];
//     queue.push(root);
//     let levelSize = 1;
//     let layerResult = [];
//     while(queue.length !== 0) {
//         node = queue.shift();
//         layerResult.push(node.val);
//         if(node.left) queue.push(node.left);
//         if(node.right) queue.push(node.right);
//         levelSize -- ;
//         if(levelSize === 0) {
//             result.push(layerResult);
//             layerResult = [];
//             levelSize = queue.length;
//         }
//     }
//     return result;
// };
var levelOrder = function(root){
    let levels = [];
    if(!root) return [];
    function order(node, level){
        if(level === levels.length) {
            levels.push([]);
        }
        levels[level].push(node.val);
        if(node.left) order(node.left, level+1);
        if(node.right) order(node.right, level+1);
    }
    order(root, 0);
    return levels;
}
