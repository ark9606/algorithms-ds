// same as MaxBinaryHeap, only its Min (opposite order) and contains Nodes instead of numbers
class QNode {
  constructor(public value: any, public priority: number) { }
}

export class PriorityQueue {
  values: QNode[];
  constructor() {
    this.values = [];
  }

  // like insert
  enqueue(value: any, priority: number) {
    this.values.push(new QNode(value, priority));
    this.bubbleUp();
  }

  private bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];

    while(index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (element.priority >= parent.priority) {
        break;
      }
      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;
    }
  }

  // like extractMax
  dequeue(): any {
    if (this.values.length === 0) {
      return null;
    }
    const min = this.values[0];
    const last = this.values.pop();
    if (this.values.length === 0) {
      return min.value;
    }
    this.values[0] = last;
    this.siftDown();
    return min.value;
  }

  private siftDown() {
    let parentInd = 0;
    const element = this.values[parentInd];
    const length = this.values.length;
    while (true) {
      const leftChildInd = 2 * parentInd + 1;
      const rightChildInd = 2 * parentInd + 2;
      let leftChild: QNode, rightChild: QNode;
      let swapInd = null;
      if (leftChildInd < length) {
        leftChild = this.values[leftChildInd];
        if (leftChild.priority < element.priority) {
          // save ind to swap with left
          swapInd = leftChildInd;
        }
      }
      if (rightChildInd < length) {
        rightChild = this.values[rightChildInd];
        if ((swapInd === null && rightChild.priority < element.priority) || (swapInd !== null && rightChild.priority < leftChild.priority)) {
          // save ind to swap with right if child smaller than parent or smaller than left
          swapInd = rightChildInd;
        }
      }
      if (swapInd === null) {
        // leave parent on its place
        break;
      }
      this.values[parentInd] = this.values[swapInd];
      this.values[swapInd] = element;
      parentInd = swapInd;
    }
  }

  toString() {
    return this.values.map(node => `{${node.value},${node.priority}}`).join(' ');
  }
}

// const queue = new PriorityQueue();
// queue.enqueue('val-4', 4);
// queue.enqueue('val-3', 3);
// queue.enqueue('val-10', 10);
// queue.enqueue('val-1', 1);
// // no order for same priority
// queue.enqueue('val-7', 7);
// queue.enqueue('val-77', 7);
// queue.enqueue('val-15', 15);
// queue.enqueue('val-12', 12);
// queue.enqueue('val-18', 18);
// queue.enqueue('val-20', 20);
// console.log('Original heap: ' + queue);
//
// console.log('\nExtracted min: ' + queue.dequeue());
// console.log('Heap: ' + queue);
// console.log('\nExtracted min: ' + queue.dequeue());
// console.log('Heap: ' + queue);
// console.log('\nExtracted min: ' + queue.dequeue());
// console.log('Heap: ' + queue);
// console.log('\nExtracted min: ' + queue.dequeue());
// console.log('Heap: ' + queue);
// console.log('\nExtracted min: ' + queue.dequeue());
// console.log('Heap: ' + queue);
// console.log('\nExtracted min: ' + queue.dequeue());
// console.log('Heap: ' + queue);
// console.log('\nExtracted min: ' + queue.dequeue());
// console.log('Heap: ' + queue);
// console.log('\nExtracted min: ' + queue.dequeue());
// console.log('Heap: ' + queue);
// console.log('\nExtracted min: ' + queue.dequeue());
// console.log('Heap: ' + queue);
// console.log('\nExtracted min: ' + queue.dequeue());
// console.log('Heap: ' + queue);
// console.log('\nExtracted min: ' + queue.dequeue());
// console.log('Heap: ' + queue);
