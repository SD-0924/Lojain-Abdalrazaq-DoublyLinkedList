class DoublyLinkedList{

    // for creating a new linked list
    constructor(){
        // head will be the first node of the linked list
        this.head = null;
        // tail will be the last node of the linked list
        this.tail = null;
    }

    // operations to the linked list
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
    }



}