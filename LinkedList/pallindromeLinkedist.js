function Node(val) {
    this.val = val;
    this.next = null;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(4);
head.next.next = new Node(3);
head.next.next.next = new Node(2);
head.next.next.next.next = new Node(1);

// console.log(head);

function checkPallindrome(head){
   let newarray = [];
   let curr = head;
   while(curr){
    newarray.push(curr.val);
    curr= curr.next;
   }
  
   let middle = Math.floor(newarray.length / 2);
   let left = 0;
   let right = newarray.length -1;
    while(left < middle){
         if(newarray[left] !== newarray[right]){
              return false;
         }
         left++;
         right--;
    }
    return true;

}
console.log(checkPallindrome(head));
