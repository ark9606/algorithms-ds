class ListNode {
  value;
  next;
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  tail;
  head;
  length;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // add to the end of list
    const node = new ListNode(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    else {
      // set the link for current tail to new node
      this.tail.next = node;
      // update the tail marker to new node
      this.tail = node;
    }

    this.length++;
    return this;
  }

  pop() {
    // remove and return the tail
    if (!this.head) {
      return undefined;
    }
    let curr = this.head;
    // store the 2nd to the last to set as tail
    let prev = null;
    while(curr.next) {
      prev = curr;
      curr = curr.next;
    }
    // new tail
    prev.next = null;
    this.tail = prev;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }

  shift() {
    // remove and return the head
    if (!this.head) {
      return undefined;
    }
    const currHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currHead;
  }

  unshift(val) {
    // insert value at the start
    const newNode = new ListNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

const list = new LinkedList();

list.push('Hello');
list.push('world');
list.push('!');

console.log('Removed', list.pop().value, list.pop().value);

list.push('there');
list.push('!!!');

console.log('Hello =', list.shift().value);

list.unshift('Hello');

console.log(list);

