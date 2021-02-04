import { ListNode } from "./nodelists";

export default class CirclyList {
    head: ListNode | null;
    constructor() {
        this.head = null;
    }

    insertFirst(node: ListNode) {
        if (!this.head) {
            this.head = node;
            this.head.next = this.head;
            return;
        }

        let currentNode: ListNode | null = this.head;

        while (currentNode!.next != this.head) {
            currentNode = currentNode!.next;
        }
        node.next = this.head;
        this.head = node;
        currentNode!.next = this.head;
    }

    insertLast(node: ListNode) {
        if (!this.head) {
            this.head = node;
            this.head.next = this.head;
            return;
        }

        let currentNode: ListNode | null = this.head;

        while (currentNode!.next != this.head) {
            currentNode = currentNode!.next;
        }

        //Kopplar den nya noden till den "sista"
        currentNode!.next = node;
        //Sätter ut den nya noden som sista
        currentNode = currentNode!.next;
        //Kopplar den nya noden till första (head)
        currentNode!.next = this.head;
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

        let currentNode: ListNode | null = this.head;

        while (currentNode!.next!.next != this.head) {
            currentNode = currentNode!.next;
        }
        currentNode!.next = this.head;
    }

    removeLast() {
        if (!this.head) {
            return;
        }

        let currentNode: ListNode | null = this.head;

        while (currentNode!.next!.next != this.head) {
            currentNode = currentNode!.next;
        }
        currentNode!.next = this.head;

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