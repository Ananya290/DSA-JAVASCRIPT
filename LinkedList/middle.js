
function Node(val) {
    this.val = val;
    this.next = null;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);


function findMiddleElement(head){
    let slow = fast = head;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}


let middleNode = findMiddleElement(head);
console.log(middleNode.val); // Output: 3