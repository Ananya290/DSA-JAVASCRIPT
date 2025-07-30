function Node(val) {
    this.val = val;
    this.next = null;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = head.next; // Creates a cycle

function cycleLinkedlist(head) {
    let curr = head;
    let newSet = new Set();
    while (curr) {
        if (newSet.has(curr)) {
            return true;
        } else {
            newSet.add(curr);
        }
        curr = curr.next;
    }
    return false;
}

console.log(cycleLinkedlist(head)); 