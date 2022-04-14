import {BinarySearchTree} from "./05_binary_search_tree";
import {Queue} from "./04_queue";

export class BinarySearchTreeBFS extends BinarySearchTree {
  // breadth-first search
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

  searchDFSPreOrder() {
    if (!this.root) {
      return null;
    }
    const visited = [];
    let curr = this.root;
    function searchHelper(node) {
      visited.push(node.value); // add as we go, before visiting all siblings
      if (node.left) {
        searchHelper(node.left);// visit all left
      }
      if (node.right) {
        searchHelper(node.right);// visit all right
      }
    }
    searchHelper(curr);
    return visited;
  }

  searchDFSPostOrder() {
    if (!this.root) {
      return null;
    }
    const visited = [];
    let curr = this.root;
    function searchHelper(node) {
      if (node.left) {
        searchHelper(node.left);
      }
      if (node.right) {
        searchHelper(node.right);
      }
      visited.push(node.value); // add after all siblings visited
    }
    searchHelper(curr);
    return visited;
  }

  searchDFSInOrder() {
    if (!this.root) {
      return null;
    }
    const visited = [];
    let curr = this.root;
    function searchHelper(node) {
      if (node.left) {
        searchHelper(node.left);
      }
      visited.push(node.value); // add when go back, after visiting left child
      if (node.right) {
        searchHelper(node.right);
      }
    }
    searchHelper(curr);
    return visited;
  }
}

const tree = new BinarySearchTreeBFS();
//       10
//   6       15
// 3   8        20
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(8);
tree.insert(3);
tree.insert(3);
tree.insert(20);

console.log('BFS:          ', tree.searchBFS());
console.log('DFS preOrder: ', tree.searchDFSPreOrder());
console.log('DFS postOrder:', tree.searchDFSPostOrder());
console.log('DFS inOrder:  ', tree.searchDFSInOrder());

// DFS vs BFS
// Time complexity DFS, BFS - same, visit every node once
// DFS для широких деревьев будет использовать меньше памяти (для BFS будет длинная очередь)
// BFS для глубоких деревьев будет использовать меньше памяти (для BFS будет много recursive calls in call stack)

// use DFS-InOrder - for BST when need to get nodes in order (sorted) - [ 3, 6, 8, 10, 15, 20 ]
// use DFS-PreOrder - for cloning/duplicating/serialising tree
