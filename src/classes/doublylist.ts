import { ListNodeDoubly } from "./nodelists";

export default class DoublyList {
    head: ListNodeDoubly | null;
    constructor() {
        this.head = null;
    }

    insertFirst(node: ListNodeDoubly) {
        if (!this.head) {
            this.head = node;
            return;
        }

        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    insertLast(node: ListNodeDoubly) {
        if (!this.head) {
            this.head = node;
            return;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
        node.prev = currentNode;
    }

    insertAt(index: number, node: ListNodeDoubly) {
        if (!this.head) {
            return;
        }

        let i = 0;
        let currentNode = this.head;

        while (currentNode.next && i < index - 1) {
            currentNode = currentNode.next;
            i++;
        }

        if (i == index - 1) {
            node.next = currentNode.next;
            currentNode.next = node;
            node!.next!.prev = node;
            node.prev = currentNode;
        }
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
        this.head!.prev = null;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        let currentNode: ListNodeDoubly | null = this.head;

        while (currentNode!.next!.next) {
            currentNode = currentNode!.next;
        }

        currentNode!.next = null;
    }

    removeAt(index: number) {
        if (!this.head) {
            return;
        }

        let i = 0;
        let currentNode: ListNodeDoubly | null = this.head;

        while (currentNode.next && i < index - 1) {
            currentNode = currentNode.next;
            i++;
        }

        if (i == index - 1) {
            if (currentNode.next) {
                currentNode.next = currentNode.next.next;
                currentNode!.next!.prev = currentNode;
            }

        }
    }

}