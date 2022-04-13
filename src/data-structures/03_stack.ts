class StackNode {
  value;
  next;
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  last;
  first;
  size;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // same as shift in singly-linked list
  pop() {
    // remove node from the beginning and return it
    if (!this.first) {
      return null;
    }
    const popped = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return popped.value;
  }

  // same as unshift in singly-linked list
  push(val) {
    // insert value at the start
    const newNode = new StackNode(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
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

const stack = new Stack();

console.log('>> push');
console.log(stack.push('first'));
console.log(stack.push('second'));
console.log(stack.push('third'));
stack.print();

console.log('\n>> pop');
console.log(stack.pop());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.pop());
stack.print();
