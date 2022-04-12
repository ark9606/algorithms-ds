export class ListNode {
  value;
  next;
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

export class SinglyLinkedList {
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
    // return element from the end and delete it
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
    // remove node from the beginning and return it
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

  get(index) {
    // just return the value at given position
    if (!this.head || index > this.length - 1 || index < 0) {
      return null;
    }
    let position = 0;
    let current = this.head;
    while (position++ !== index) {
      current = current.next;
    }
    return current;
  }

  set(index, value) {
    // change the value at the given position
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    // insert a new node at the given position
    if (index < 0 || index > this.length) {
      return false;
    }
    else if (index === 0) {
      return !!this.unshift(value);
    }
    else if (index === this.length) {
      return !!this.push(value);
    }
    const prevNode = this.get(index - 1);
    const newNode = new ListNode(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    // remove a new node at the given position
    if (index < 0 || index > this.length - 1) {
      return false;
    }
    else if (index === 0) {
      return !!this.shift()
    }
    else if (index === this.length - 1) {
      return !!this.pop();
    }
    const prevNode = this.get(index - 1);
    prevNode.next = prevNode.next.next;
    this.length--;
    return true;
  }

  reverse() {
    if (!this.head) {
      return undefined;
    }
    const temp = this.tail;
    this.tail = this.head;

    let currItem = this.head;
    let prevItem = null;  // will be tail
    let nextItem = null;
    while (currItem) {
      nextItem = currItem.next; // save pointer to next node
      currItem.next = prevItem; // curr node will look to the prev
      prevItem = currItem;      // curr becomes previous
      currItem = nextItem;      // go to the next node
    }
    this.head = temp;
    return this;
  }

  traverse(func) {
    if (!this.head) {
      return undefined;
    }
    let curr = this.head;
    while(curr) {
      func(curr);
      curr = curr.next;
    }
  }

  print() {
    if (!this.head) {
      return undefined;
    }
    const arr = [];
    let curr = this.head;
    while(curr) {
      arr.push(curr.value);
      curr = curr.next;
    }
    console.log(arr);
  }
}
const logElement = (element) => console.log(element.value);


const list = new SinglyLinkedList();

list.push('Hello');
list.push('world');
list.push('!');

console.log('Removed', list.pop().value, list.pop().value);

list.push('there');
list.push('!!!');

console.log('Hello =', list.shift().value);

list.unshift('Hello');

console.log(list);

console.log('Node at position 0', list.get(0));
console.log('Node at position 2', list.get(2));

console.log(list.set(1000, '!'));
console.log(list.set(2, '!'));
console.log('Node at position 2', list.get(2));

list.insert(0, 'Very'); // start
list.insert(2, ',');    // middle
list.insert(5, '!');    // end
printList(list);

console.log(list.remove(0));  // start
console.log(list.remove(1));  // middle
console.log(list.remove(3));  // end
printList(list);

const numList = new SinglyLinkedList();
numList.push(1).push(2).push(3).push(4).push(5);
console.log(numList.reverse());
// numList.traverse(logElement);
numList.print();

function printList(list) {
  let str = '';
  for (let i = 0; i < list.length; i++) {
    str += list.get(i).value;
  }
  console.log(str);
}

