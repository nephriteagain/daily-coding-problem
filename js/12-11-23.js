"use strict";
/**
 * Given the root to a binary tree,
 * implement serialize(root),
 * which serializes the tree into a string,
 * and deserialize(s),
 * which deserializes the string back into te tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
 */
/**
 *
 */
var _a, _b;
var N = /** @class */ (function () {
    function N(val, left, right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    N.prototype.serialize = function () {
        return JSON.stringify(this);
    };
    return N;
}());
function deserialize(nodestring) {
    var node = JSON.parse(nodestring);
    return node;
}
var n1 = new N('root', new N('left', new N('left.left')), new N('right'));
console.log(((_b = (_a = deserialize(n1.serialize()).left) === null || _a === void 0 ? void 0 : _a.left) === null || _b === void 0 ? void 0 : _b.val) == 'left.left');
