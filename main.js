const DoublyLinkedList = require('./DoublyLinkedList.js');

// Testing the linked list operations
const list = new DoublyLinkedList();
// Push operations
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
console.log(list.print());
