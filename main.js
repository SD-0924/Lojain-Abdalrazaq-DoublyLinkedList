const DoublyLinkedList = require('./DoublyLinkedList.js');

// Testing the linked list operations
const list = new DoublyLinkedList();

// Push operations
console.log("Pushing values 10, 20, 30, 40, 50:");
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push(50);
console.log("Length: ", list.length);
console.log("=====================================");
list.print();
console.log("=====================================");

// Pop operations
console.log("Popping last three values:");
console.log("Popped: ", list.pop());
console.log("Popped: ", list.pop());
console.log("Popped: ", list.pop());
console.log("Length: ", list.length);
console.log("=====================================");
list.print();
console.log("=====================================");

// Shift operations
console.log("Shifting the first value:");
console.log("Shifted: ", list.shift());
console.log("Length: ", list.length);
console.log("=====================================");
list.print();
console.log("=====================================");

// Unshift operations
console.log("Unshifting value 10:");
list.unshift(10);
console.log("Length: ", list.length);
console.log("=====================================");
list.print();
console.log("=====================================");

// Get operations
console.log("Getting values:");
console.log("Get at index 0: ", list.get(0));
console.log("Get at index 10: ", list.get(10));
console.log("=====================================");

// Set operations
console.log("List Before Set: ");
list.print();
console.log("Setting value at index 0 to 100:");
list.set(0, 100);
console.log("List After Set: ");
list.print();
console.log("Setting value at invalid index 10 to 100:");
list.set(10, 100); // Invalid index test
console.log("=====================================");

// Insert operations
console.log("List Before Insert: ");
list.print();
console.log("Inserting value 200 at index 0:");
list.insert(0, 200);
console.log("List After Insert: ");
list.print();
console.log("Inserting value 300 at invalid index 10:");
list.insert(10, 300); // Invalid index test
console.log("=====================================");

// Remove operations
console.log("Removing values:");
console.log("Remove value at index 0: ", list.remove(0)); // Should return 200
console.log("List After Removing index 0: ");
list.print();
console.log("Remove value at invalid index 10: ", list.remove(10)); // Invalid index test
console.log("=====================================");

// Final state of the list
console.log("Final Length: ", list.length);
console.log("Final List State: ");
list.print();
console.log("=====================================");