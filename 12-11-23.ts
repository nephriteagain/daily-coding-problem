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

class N {
    val : any;
    left: N|undefined;
    right: N|undefined;

    constructor(val:any, left?:N, right?: N) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    serialize() {
        return JSON.stringify(this)
    }
}

function deserialize(nodestring:string) : N {    
    const node = JSON.parse(nodestring) as N
    return node
}

const n1 = new N('root', new N('left', new N('left.left')), new N('right'))

console.log(deserialize(n1.serialize()).left?.left?.val == 'left.left')