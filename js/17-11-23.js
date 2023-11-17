"use strict";
/**
 * This problem was asked by Google.

A unival tree (which stands for "universal value")
is a tree where all nodes under it have the same value.

Given the root to a binary tree, count the number of unival subtrees.

For example, the following tree has 5 unival subtrees:

   0
  / \
 1   0
    / \
   1   0
  / \
 1   1

 */
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.val = val;
        this.left = left;
        this.right = right;
    }
    TreeNode.prototype.addLeft = function (val) {
        var newNode = new TreeNode(val);
        this.left = newNode;
    };
    TreeNode.prototype.addRight = function (val) {
        var newNode = new TreeNode(val);
        this.right = newNode;
    };
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree(root) {
        if (root === void 0) { root = null; }
        this.root = root;
    }
    Tree.prototype.makeRoot = function (node) {
        this.root = node;
    };
    Tree.prototype.getUnivalSubtreesCount = function () {
        if (!this.root) {
            return 0;
        }
        var totalCount = { total: 0 };
        Tree.countDFS(this.root, totalCount, this.root);
        return totalCount.total;
    };
    Tree.countDFS = function (currNode, totalCount, root) {
        if (currNode === null) {
            return;
        }
        var currTotal = totalCount;
        if ((currNode.left === null || currNode.left.val === currNode.val) &&
            (currNode.right === null || currNode.right.val === currNode.val) &&
            (currNode !== root)) {
            console.log(currNode.val, 'is a unival node');
            ++totalCount.total;
        }
        this.countDFS(currNode.left, currTotal, root);
        this.countDFS(currNode.right, currTotal, root);
        return;
    };
    return Tree;
}());
function test() {
    /**
     *
       0
      / \
     1   0
        / \
       1   0
      / \
     1   1
     */
    var n0 = new TreeNode(0);
    var n1 = new TreeNode(1);
    var n2 = new TreeNode(0);
    var n3 = new TreeNode(1);
    var n4 = new TreeNode(0);
    var n5 = new TreeNode(1);
    var n6 = new TreeNode(1);
    n0.left = n1;
    n0.right = n2;
    n2.left = n3;
    n2.right = n4;
    n3.left = n5;
    n3.right = n6;
    var tree = new Tree(n0);
    var univalCount = tree.getUnivalSubtreesCount();
    console.log(univalCount);
}
test();
