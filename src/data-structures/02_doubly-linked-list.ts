const logElement = (element) => console.log(element.value);

class ListNode {
  prev;
  next;
  value;
  constructor(val) {
    this.prev = null;
    this.next = null;
    this.value = val;
  }
}

class DoublyLinkedList {
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
    const newNode = new ListNode(value);
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // return element from the end and delete it
    if (!this.head || this.length === 0) {
      return undefined;
    }
    const popped = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    }
    else {
      this.tail = popped.prev;
      this.tail.next = null;
      popped.prev = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    // remove node from the beginning and return it
    if (!this.head || this.length === 0) {
      return undefined;
    }
    const shifted = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    else {
      this.head = shifted.next;
      this.head.prev = null;
      shifted.next = null;
    }
    this.length--;
    return shifted;
  }

  unshift(value) {
    // insert value at the start
    const newNode = new ListNode(value);
    if (!this.head || this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    // just return the value at given position
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }
    if (index < this.length / 2) {
      let curr = this.head;
      let count = 0;
      while (count++ !== index) {
        curr = curr.next;
      }
      return curr;
    }
    else {
      let curr = this.tail;
      let count = this.length - 1;
      while (count-- !== index) {
        curr = curr.prev;
      }
      return curr;
    }
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
      return undefined;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    else if (index === this.length) {
      this.push(value);
      return true;
    }
    const newNode = new ListNode(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    newNode.prev = beforeNode;
    beforeNode.next = newNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    // remove a new node at the given position
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }
    if (index === 0) {
      this.shift();
      return true;
    }
    else if (index === this.length - 1) {
      this.pop();
      return true;
    }
    const foundNode = this.get(index);
    const beforeNode = foundNode.prev;
    const afterNode = foundNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    foundNode.prev = null;
    foundNode.next = null;
    this.length--;
    return foundNode;
  }

  print() {
    if (!this.head) {
      return [];
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


let list = new DoublyLinkedList();
// push
console.log('>> push');
console.log(list.pop());
list.push('Apple');
list.push('Banana');
list.push('Citrus');
list.push('Kiwi');
list.push('Mango');
list.print();

// pop
console.log('\n>> pop');
list.push('to pop');
list.print();
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
list.print();

// shift
console.log('\n>> shift');
list.push('Apple');
list.push('Banana');
list.push('Citrus');
list.print();
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
list.print();

// unshift
console.log('\n>> unshift');
list = new DoublyLinkedList();
list.unshift('Orange');
list.unshift('Citrus');
list.unshift('Banana');
list.unshift('Apple');
list.print();

// get
console.log('\n>> get');
list.print();
console.log(list.get(-1)?.value)
console.log(list.get(0)?.value)
console.log(list.get(1)?.value)
console.log(list.get(2)?.value)
console.log(list.get(3)?.value)
console.log(list.get(4)?.value)

// set
console.log('\n>> set');
list.print();
console.log(list.set(2, 'fruit'))
list.print();


// insert
console.log('\n>> insert');
list.print();
list.insert(0, 'water');  // start
list.insert(3, 'fire');   // middle
list.insert(6, 'ground'); // end
list.print();

// remove
console.log('\n>> remove');
list.print();
list.remove(0)
list.remove(2)
list.remove(4)
list.remove(2)
list.remove(999)
list.print();

