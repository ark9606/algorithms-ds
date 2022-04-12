const logElement = (element) => console.log(element.value);

export class ListNode {
  prev;
  next;
  value;
  constructor(val) {
    this.prev = null;
    this.next = null;
    this.value = val;
  }
}

export class DoublyLinkedList {
  tail;
  head;
  length;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}


const list = new DoublyLinkedList();

