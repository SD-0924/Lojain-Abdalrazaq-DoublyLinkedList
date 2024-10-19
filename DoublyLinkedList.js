import Node from './Node.js';

class DoublyLinkedList{

    // for creating a new linked list
    constructor(){
        this.head = null; // head will be the first node of the linked list
        this.tail = null; // tail will be the last node of the linked list
        this.length = 0; // length will be the total number of nodes in the linked list
    }

    // 1. push(val): add a new node to the end of the linked list
    push(val){
        // create a new node
        let tempNode = new Node(val);
        // if the linked list is empty
        if(this.head === null){
            this.head = tempNode;
            this.tail = tempNode;
        }else{
            // if the linked list is not empty
            this.tail.next = tempNode; // the current tail's next will be the new node
            tempNode.previous = this.tail; // the new node's previous will be the current tail
            this.tail = tempNode; // the new node will be the new tail of the linked list
        }
        this.length++; // increase the length of the linked list
        // return the linked list
        return this;
    }

    // 2. pop(): remove the last node of the linked list
    pop(){
        // if the linked list is empty
        if(this.head === null){
            return null;
        }
        let tempNode = this.tail; // store the current tail
        // if the linked list has only one node
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = this.tail.previous; // the previous node of the current tail will be the new tail
            this.tail.next = null; // the next of the new tail will be null
        }
        // now, removing the links of the popped node
        tempNode.previous = null;
        tempNode.next = null;
        this.length--;
        return this;  
    }

    // 3. shift(): remove the first node of the linked list
    shift(){
        // if the linked list is empty
        if(this.head === null){
            return null;
        }
        let shiftedNode = this.head;
        // if the linked list has only one node
        if(this.head === this.tail){
            this.head = null; 
            this.tail = null; 
        }else{
            this.head = this.head.next;
            this.head.previous = null; 
        }
        // now, removing the links of the shifted node
        shiftedNode.previous = null;
        shiftedNode.next = null;
        this.length--;
        return this;
    }

    // 4. unshift(val): add a new node to the beginning of the linked list
    unshift(val){
        let tempNode = new Node(val);
        // if the linked list is empty
        if(this.head === null){
            this.head = tempNode;
            this.tail = tempNode;
        }else{
            tempNode.next = this.head;
            this.head.previous = tempNode;
            this.head = tempNode;
            this.length++;
        } 
        return this;
    }

    // getNode function will be called/used later in other functions
    getNode(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current;
        // Check if the index is in the first half of the list
        if (index <= Math.floor(this.length / 2)) {
            current = this.head;
            for (let i = 0; i < index; i++) {
                current = current.next;
            }
        } else {
            // Otherwise, traverse from the tail
            current = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                current = current.previous;
            }
        }
        return current;  // Return the node itself
    }

    // 5. get(index): get the node at the given index
    get(index){
        let current = this.getNode(index);
        if(current !== null){
            return current.data;
        }
        return null;
    }

    // 6. set(index, val): set the value of the node at the given index
    set(index, val){
        let current = this.get(index);
        if(current !== null){
            current.data = val;
            return true;
        }
        return false;
    }

    // 7. insert(index, val): insert a new node at the given index
    insert(index,val){
        // if the index is invalid
        if(index < 0 || index > this.length){
            return false;
        }
        // if the index is 0, then we perform the unshift operation
        if(index === 0){
            this.unshift(val);
            return true;
        }
        // if the index is the same as the length of the linked list, then we perform the push operation
        if(index === this.length){
            this.push(val);
            return true;
        }
        // in the other cases:
        let tempNode = new Node(val);
        let current = this.getNode(index);
        let previous = current.previous;
        previous.next = tempNode;
        tempNode.previous = previous;
        tempNode.next = current;
        current.previous = tempNode;
        this.length++; 
        return true;
    }

    // 8. remove(index): remove the node at the given index
    remove(index){
        // if the index is invalid
        if(index < 0 || index >= this.length){
            return null;
        }
        // if the index is 0, then we perform the shift operation
        if(index === 0){
            return this.shift();
        }
        // if the index is the same as the length of the linked list - 1, then we perform the pop operation
        if(index === this.length - 1){
            return this.pop();
        }
        // in the other cases:
        let current = this.getNode(index);
        let previous = current.previous;
        let next = current.next;
        previous.next = next;
        next.previous = previous;
        // now, removing the links of the removed node to be removed later by the garbage collector
        current.previous = null;
        current.next = null;
        this.length--;
        return this;
    }

    // print the linked list
    print(){
        let current = this.head;
        console.log("Printing the linked list:");
        console.log("====================================");
        while(current !== null){
            console.log(current.data);
            current = current.next;
        }
        console.log("====================================");
    }
}