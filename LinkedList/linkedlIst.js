//        ----1---2---3----4----5---
function Node(val) {
  this.val = val;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

MyLinkedList.prototype.get = function(index){
    if (index < 0 || index >= this.size) return -1;
    let curr = this.head;
    for (let i = 0; i < index; i++) {
        curr = curr.next;
    }
    return curr.val;
}

MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
    let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let curr = this.head;
    while (curr.next != null) {
        curr = curr.next;
    }
    curr.next = newNode;
   
  }

  this.size++;
};

MyLinkedList.prototype.addAtIndex = function(index,val){
    let curr = this.head;
    let newNode = new Node(val);
    if(index < 0 || index > this.size) return;
    if(index == 0) return this.addAtHead(val);
    if(index == this.size) return this.addAtTail(val);
    for(let i =0;i < index-1 ; i++){
        curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
}

MyLinkedList.prototype.deleteAtIndex=function(index){
    let curr = this.head
    if(index < 0 || index > this.size || this.head == null) return;
    if(index == 0) return this.head = this.head.next;
    for(let i = 0; i<index-1;i++){
     curr =curr.next;
    }
    curr.next = curr.next.next;
    this.size--;
}




module.exports = { MyLinkedList };

let list = new MyLinkedList();
add = list.addAtHead(1);
add = list.addAtHead(2);
add = list.addAtHead(3);
add = list.addAtHead(4);
console.log(list.get(3)); 
