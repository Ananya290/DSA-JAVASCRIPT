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

// console.log(cycleLinkedlist(head)); 


//Another way to do Linked List Cycle - Floyd's Algorithm--------------------------------------------

function cycleLinkedlistFloyd(head) {
    if(head == 0) return false
    let slow = head;
    let fast = head.next;

    while(slow != fast){
        if(fast == null || fast.next == null) return false;
        slow = slow.next;
        fast = fast.next.next
    }
    return true;

}

console.log(cycleLinkedlist(head));
