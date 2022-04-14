class TreeNode {
  value;
  left;
  right;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  root;
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    }
    let curr = this.root;

    while (true) {
      if (newNode.value === curr.value) {
        // skip duplicates
        return this;
      }
      if (newNode.value > curr.value) {
        if (!curr.right) {
          curr.right = newNode;
          return this;
        } else {
          curr = curr.right;
        }
      } else {
        if (!curr.left) {
          curr.left = newNode;
          return this;
        } else {
          curr = curr.left;
        }
      }
    }

  }
}

const tree = new BinarySearchTree();
// tree.root = new TreeNode(18);
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(8);
tree.insert(3);
tree.insert(3);
console.log(tree.root.left);
