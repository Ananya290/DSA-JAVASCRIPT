function Node(val) {
    this.val = val;
    this.next = null;
}


let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
// --1---2--3--4--5--
// Function to reverse the linked list
function reverseLinkedList(head){
    let prev = null;
    let curr = head;
    while (curr != null) {
        let temp = curr;
        curr.next = prev;
        prev = curr;
        curr = temp.next;
    }
    return prev;l
}
console.log(reverseLinkedList(head))