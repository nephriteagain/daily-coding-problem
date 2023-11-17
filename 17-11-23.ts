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

class TreeNode {
    val: number;
    left: TreeNode|null;
    right: TreeNode|null

    constructor(val:number, left:TreeNode|null=null, right:TreeNode|null=null ) {
        this.val = val;
        this.left = left;
        this.right = right;
    }

    addLeft(val:number) {
        const newNode = new TreeNode(val)
        this.left = newNode
    }

    addRight(val:number) {
        const newNode = new TreeNode(val)
        this.right = newNode
    }
}

class Tree {
    root: TreeNode|null;
    constructor(root : TreeNode|null = null) {
        this.root = root
    }

    makeRoot(node : TreeNode) {
        this.root = node;
    }

    getUnivalSubtreesCount() : number {
        if (!this.root) {
            return 0;
        }
        const totalCount =  {total:0}
        Tree.countDFS(this.root, totalCount, this.root)
        return totalCount.total
    }

    private static countDFS(currNode: TreeNode|null, totalCount: {total:number}, root: TreeNode) : void {
        if (currNode === null) {
            return
        }
        let currTotal = totalCount;
        
        if (
            (currNode.left === null || currNode.left.val === currNode.val) &&
            (currNode.right === null || currNode.right.val === currNode.val) &&
            (currNode!== root)
            ) {
                console.log(currNode.val, 'is a unival node')
                ++totalCount.total
            }
            
            this.countDFS(currNode.left, currTotal, root) 
            this.countDFS(currNode.right, currTotal, root)
            return 
        }
    
}
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
    const n0 = new TreeNode(0)
    const n1 = new TreeNode(1)
    const n2 = new TreeNode(0)
    const n3 = new TreeNode(1)
    const n4 = new TreeNode(0)
    const n5 = new TreeNode(1)
    const n6 = new TreeNode(1)

    n0.left = n1;
    n0.right = n2;
    n2.left = n3;
    n2.right = n4;
    n3.left = n5;
    n3.right = n6;

    const tree = new Tree(n0)
    const univalCount = tree.getUnivalSubtreesCount()
    console.log(univalCount)
}

test()