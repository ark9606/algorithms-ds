class MaxBinaryHeap {
  values;
  constructor() {
    this.values = [];
  }

  insert0(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    let element = this.values[index];
    let parentIndex = Math.floor((index - 1) / 2);

    while(element > this.values[parentIndex]) {
      let parent = this.values[parentIndex];
      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    let element = this.values[index];

    while(index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      this.values[parentIndex] = element;
      this.values[index] = parent;

      index = parentIndex;
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
console.log('heap: ' + heap);

