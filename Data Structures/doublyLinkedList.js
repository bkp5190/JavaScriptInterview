// Write an implementation of a Doubly Linked List.
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  // End of Linked List
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  // Beginning of Linked List
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Middle of Linnked List
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  remove(index) {
    const previous = this.traverseToIndex(index - 1);
    const target = previous.next;
    previous.next = target.next;
    this.length--;
    return this;
  }
}

let myLinkedList = new LinkedList(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
myLinkedList.append(6);
console.log(myLinkedList);
myLinkedList.prepend(1);
console.log(myLinkedList);
console.log(myLinkedList.insert(1, 2));
console.log(myLinkedList.remove(1));
console.log(myLinkedList.remove(2));
console.log(myLinkedList.remove(3));
console.log(myLinkedList.remove(4));