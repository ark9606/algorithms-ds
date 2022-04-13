class LNode {
  value;
  next;
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
    const node = new LNode(value);
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
    currHead.next = null;
    return currHead;
  }

  unshift(val) {
    // insert value at the start
    const newNode = new LNode(val);
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
    const newNode = new LNode(value);
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
const logEl = (element) => console.log(element.value);


const list0 = new SinglyLinkedList();

list0.push('Hello');
list0.push('world');
list0.push('!');

console.log('Removed', list0.pop().value, list0.pop().value);

list0.push('there');
list0.push('!!!');

console.log('\n>> shift');
console.log('Hello =', list0.shift());

list0.unshift('Hello');

console.log(list0);

console.log('Node at position 0', list0.get(0));
console.log('Node at position 2', list0.get(2));

console.log(list0.set(1000, '!'));
console.log(list0.set(2, '!'));
console.log('Node at position 2', list0.get(2));

list0.insert(0, 'Very'); // start
list0.insert(2, ',');    // middle
list0.insert(5, '!');    // end
printList(list0);

console.log(list0.remove(0));  // start
console.log(list0.remove(1));  // middle
console.log(list0.remove(3));  // end
printList(list0);

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


