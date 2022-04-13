class QueueNode {
  value;
  next;
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  last;
  first;
  size;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // same as push in singly-linked list
  enqueue(value) {
    // add to the end of queue
    const node = new QueueNode(value);
    if (!this.first) {
      this.first = node;
      this.last = node;
    }
    else {
      // set the link for current last to new node
      this.last.next = node;
      // update the last marker to new node
      this.last = node;
    }
    return ++this.size;
  }

  // same as shift in singly-linked list
  dequeue() {
    // remove node from the beginning and return it
    if (!this.first) {
      return null;
    }
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }


  print() {
    if (!this.first) {
      return undefined;
    }
    const arr = [];
    let curr = this.first;
    while(curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    console.log(arr);
  }
}

const queue = new Queue();
queue.print();
console.log(queue.enqueue('first'));
console.log(queue.enqueue('second'));
console.log(queue.enqueue('third'));

queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.dequeue());
queue.print();
console.log(queue.dequeue());
queue.print();


