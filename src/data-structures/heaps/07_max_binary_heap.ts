class MaxBinaryHeap {
  values: number[];
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  private bubbleUp() {
    let index = this.values.length - 1;
    let element = this.values[index];

    while(index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent >= element) {
        break;
      }
      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;
    }
  }

  // like remove
  extractMax() {
    if (this.values.length === 0) {
      return null;
    }
    const max = this.values[0];
    const last = this.values.pop();
    if (this.values.length === 0) {
      return max;
    }
    this.values[0] = last;
    this.siftDown();
    return max;
  }

  private siftDown() {
    let parentInd = 0;
    const element = this.values[parentInd];
    const length = this.values.length;
    while (true) {
      const leftChildInd = 2 * parentInd + 1;
      const rightChildInd = 2 * parentInd + 2;
      let leftChild, rightChild;
      let swapInd = null;
      if (leftChildInd < length) {
        leftChild = this.values[leftChildInd];
        if (leftChild > element) {
          // save ind to swap with left
          swapInd = leftChildInd;
        }
      }
      if (rightChildInd < length) {
        rightChild = this.values[rightChildInd];
        if ((swapInd === null && rightChild > element) || (swapInd !== null && rightChild > leftChild)) {
          // save ind to swap with right if it is bigger than parent or bigger than left
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
    return this.values.join(' ');
  }
}

const heap = new MaxBinaryHeap();
heap.insert(4);
heap.insert(3);
heap.insert(10);
heap.insert(1);
heap.insert(7);
heap.insert(15);
heap.insert(12);
heap.insert(18);
heap.insert(20);
console.log('Original heap: ' + heap);

console.log('\nExtracted max: ' + heap.extractMax());
console.log('Heap: ' + heap);
console.log('\nExtracted max: ' + heap.extractMax());
console.log('Heap: ' + heap);
console.log('\nExtracted max: ' + heap.extractMax());
console.log('Heap: ' + heap);
console.log('\nExtracted max: ' + heap.extractMax());
console.log('Heap: ' + heap);
console.log('\nExtracted max: ' + heap.extractMax());
console.log('Heap: ' + heap);
console.log('\nExtracted max: ' + heap.extractMax());
console.log('Heap: ' + heap);
console.log('\nExtracted max: ' + heap.extractMax());
console.log('Heap: ' + heap);
console.log('\nExtracted max: ' + heap.extractMax());
console.log('Heap: ' + heap);
console.log('\nExtracted max: ' + heap.extractMax());
console.log('Heap: ' + heap);
console.log('\nExtracted max: ' + heap.extractMax());
console.log('Heap: ' + heap);
