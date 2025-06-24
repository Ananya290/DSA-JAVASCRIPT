
/*Leet Code Reverse Question 7
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

*/


let x = 12345
 function revInteger(x) {
 let xcopy = x
 x = Math.abs(x)
 let rev =0;

 while(x>0){
    let rem = x % 10
    rev = (10*rev) +rem
    x = Math.floor(x/10)
 }
 let limit = Math.pow(2,31)
 if(rev < -limit || rev > limit){
     return 0;
 }else if(xcopy < 0){
    return -rev
 }else{
    return rev
 }


    
};


console.log(revInteger(x));



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
   
}
let output = revInterger(123456789)
console.log("reverse of a number is",output)



