/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;
  let val = 0;
  if (root1 && root1.val) val += root1.val;
  if (root2 && root2.val) val += root2.val;
  const res = new TreeNode(
    val,
    mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null),
    mergeTrees(root1 ? root1.right : null, root2 ? root2.right : null)
  );
  return res;
};
