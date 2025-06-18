// Write a program to reverse the integer.
 
let rev = 0;
// let numCopy = num;
function revInterger(num){
while(num >0){
    let rem = num %10
    rev = (10*rev) + rem
    num = Math.floor(num /10);
}
   return rev;
    // console.log(rev)
}
let output = revInterger(123456789)
console.log("reverse of a number is",output)