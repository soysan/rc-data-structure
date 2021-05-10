import Node from "./node.js";

class dNode extends Node {
    constructor(data) {
        super(data);
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(arr) {
        if (arr.length <= 0) {
            this.head = new dNode(null);
            this.tail = this.head;
            return;
        }

        this.head = new dNode(arr[0]);
        let currNode = this.head;
        for (let i = 1; i < arr.length; i++){
            currNode.next = new dNode(arr[i]);
            currNode.next.prev = currNode;
            currNode = currNode.next;
        }

        this.tail = currNode;
    }

    printList = () => {
        let iterator = this.head;
        let results = "";
        while (iterator !== null) {
            results += iterator.data + " ";
            iterator = iterator.next;
        }
        console.log(results);
    }
}
