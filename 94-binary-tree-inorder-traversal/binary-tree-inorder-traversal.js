/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const traverse = (node,list) => {
    if(!node){
        return;
    }

    traverse(node.left,list);
    list.push(node.val);
    traverse(node.right,list);
}

var inorderTraversal = function(root) {
    const sol = [];
    traverse(root,sol);

    return sol
};