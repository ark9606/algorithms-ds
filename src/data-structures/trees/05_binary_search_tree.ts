export class TreeNode {
  value;
  left;
  right;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
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

  contains(value) {
    if (!this.root) {
      return false;
    }
    let curr = this.root;
    while (curr) {
      if (curr.value === value) {
        return true;
      }
      if (value > curr.value) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(8);
tree.insert(3);
tree.insert(3);
tree.insert(20);
console.log(tree.root.left);

console.log(tree.contains(10));
console.log(tree.contains(8));
console.log(tree.contains(3));
console.log(tree.contains(99));
