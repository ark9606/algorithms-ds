import {Queue} from "./04_queue";

export class TreeNode {
  value: number;
  left: TreeNode;
  right: TreeNode;
  bf: number;
  height: number;
  // count of entries of the same value
  entriesCount: number;

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = 0;
    this.bf = null;
    this.entriesCount = 1;
  }
}

export class AVLTree {
  root: TreeNode;
  size: number;
  constructor() {
    this.root = null;
    this.size = 0;
  }

  // borrowed from the BinarySearchTree
  find(value) {
    if (!this.root) {
      return false;
    }
    let curr = this.root;
    while (curr) {
      if (curr.value === value) {
        return curr;
      }
      if (value > curr.value) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    return false;
  }

  public insert(value: number): boolean {
    if (typeof value !== 'number') {
      return null;
    }
    const found = this.find(value);
    if (found) {
      found.entriesCount++;
      return;
    }
    this.root = this._insert(this.root, value);
    this.size++;
    return true;
  }

  private _insert(node: TreeNode, value: number): TreeNode {
    if (node === null) {
      // technically, here we add new node
      return new TreeNode(value);
    }
    // follow BST rule
    if (value < node.value) {
      // insert new value into subtree of left child, because value is lower
      node.left = this._insert(node.left, value);
    }
    else {
      // insert new value into subtree of right child, because value is bigger
      node.right = this._insert(node.right, value);
    }

    // update balance factor and height values
    this.update(node);
    return this.balance(node);
  }

  private update(node: TreeNode): void {
    // to handle if no children
    let leftHeight = -1;
    let rightHeight = -1;

    if (node.left !== null) {
      leftHeight = node.left.height;
    }
    if (node.right !== null) {
      rightHeight = node.right.height;
    }

    // add +1 if no children to have length = 0
    node.height = 1 + Math.max(leftHeight, rightHeight);
    node.bf = rightHeight - leftHeight;
  }

  private balance(node: TreeNode): TreeNode {
    // Left heavy subtree
    // if balance factor of node = -2
    if (node.bf < -1) {
      if (node.left.bf <= 0) {
        // only one rotation
        return this.leftLeftCase(node);
      }
      else {
        // left, right rotation
        return this.leftRightCase(node);
      }
    }
    // Right heavy subtree
    // if balance factor of node = +2
    else if (node.bf > +1) {
      if (node.right.bf >= 0) {
        // only one rotation
        return this.rightRightCase(node);
      }
      else {
        // right, left rotation
        return this.rightLeftCase(node);
      }
    }
    return node;
  }

  private leftLeftCase(node: TreeNode): TreeNode {
    return this.rightRotation(node);
  }

  private rightRightCase(node: TreeNode): TreeNode {
    return this.leftRotation(node);
  }

  private leftRightCase(node: TreeNode): TreeNode {
    node.left = this.leftRotation(node.left);
    return this.rightRotation(node);
  }

  private rightLeftCase(node: TreeNode): TreeNode {
    node.right = this.rightRotation(node.right);
    return this.leftRotation(node);
  }

  private rightRotation(node): TreeNode {
    const oldLeft = node.left; // will stand on the place of node
    node.left = oldLeft.right;
    oldLeft.right = node;

    this.update(node);
    this.update(oldLeft);
    return oldLeft;
  }

  private leftRotation(node): TreeNode {
    const oldRight = node.right; // will stand on the place of node
    node.right = oldRight.left;
    oldRight.left = node;

    this.update(node);
    this.update(oldRight);
    return oldRight;
  }

  // borrowed from BinarySearchTreeBFS
  searchBFS() {
    const visited = [];
    const queue = new Queue();
    let node = null;
    if (!this.root) {
      return null;
    }
    queue.enqueue(this.root);
    while (queue.size) {
      node = queue.dequeue();
      visited.push(node.value);
      if (node.left) {
        queue.enqueue(node.left);
      }
      if (node.right) {
        queue.enqueue(node.right);
      }
    }
    return visited;
  }
}

// const tree0 = new AVLTree();
// console.log('\nLeft-left case:')
// tree0.insert(5);
// tree0.insert(4);
// tree0.insert(3);
// console.log(tree0.searchBFS());

// console.log('\nRight-right case:')
// const tree1 = new AVLTree();
// tree1.insert(3);
// tree1.insert(4);
// tree1.insert(5);
// console.log(tree1.searchBFS());


// console.log('\nLeft-right case:')
// const tree2 = new AVLTree();
// tree2.insert(5);
// tree2.insert(3);
// tree2.insert(4);
// console.log(tree2.searchBFS());

// console.log('\nRight-left case:')
// const tree3 = new AVLTree();
// tree3.insert(3);
// tree3.insert(5);
// tree3.insert(4);
// console.log(tree3.searchBFS());

console.log('\nAVL tree:')
const tree = new AVLTree();
tree.insert(7);
tree.insert(4);
tree.insert(1);
tree.insert(0);
tree.insert(2);
tree.insert(6);
tree.insert(8);
tree.insert(3);
tree.insert(4); // duplicate
tree.insert(5);
tree.insert(7); // duplicate
console.log(tree.searchBFS().join(', '));
