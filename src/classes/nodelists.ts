export class ListNode {
    data: any;
    next: ListNode | null;
    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}
export class ListNodeDoubly {
    data: any;
    next: ListNodeDoubly | null;
    prev: ListNodeDoubly | null;
    constructor(data: any) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
