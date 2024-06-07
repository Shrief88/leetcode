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
 * @return {TreeNode}
 */

const reverse = (node) => {
    if(!node || (!node.left && !node.right)){
        return
    }

    reverse(node.right);
    reverse(node.left);

    const tmp = node.left;
    node.left = node.right;
    node.right = tmp;
}

var invertTree = function(root) {
    reverse(root);
    return root;
};