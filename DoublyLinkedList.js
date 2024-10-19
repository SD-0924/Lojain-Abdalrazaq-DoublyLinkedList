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
        return tempNode.data;  
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
        return shiftedNode.data;
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
    }

    // getNode function will be used later in the get and set methods
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
        return null
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




}