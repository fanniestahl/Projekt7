import { ListNode } from "./nodelists";

export default class SinglyList {
    head: ListNode | null;
    constructor() {
        this.head = null;
    }

    insertFirst(node: ListNode) {
        node.next = this.head;
        this.head = node;
    }

    insertLast(node: ListNode) {
        if (!this.head) {
            this.head = node;
            return;
        }

        let currentNode = this.head;

        while (currentNode.next) {
            currentNode = currentNode.next;
        }

        currentNode.next = node;
    }

    insertAt(index: number, node: ListNode) {
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
        }
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        let currentNode: ListNode | null = this.head;

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
        let currentNode: ListNode | null = this.head;

        while (currentNode.next && i < index - 1) {
            currentNode = currentNode.next;
            i++;
        }

        if (i == index - 1) {
            if (currentNode.next) {
                currentNode.next = currentNode.next.next;
            }

        }
    }

}
