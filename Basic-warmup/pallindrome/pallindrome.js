//Question 1 : Find the pallindrome number

num = 121
numCopy= num
rev = 0;
while(num>0){
    let rem = num % 10
     rev = (10*rev) + rem
    num = Math.floor(num/10)
    }
if(numCopy == rev) {
    console.log("its a palindrome")
}
else{
      console.log("it  is not  a palindrome")
}

// By using function find the pallindrome.

let number = 121
copyNumber = number
let rev = ""
function reverseInteger(){
 while(number>0){
    rem = (number % 10)
    rev += rem
    number = Math.floor(number / 10)
 }
 if(copyNumber == rev){
console.log("its a pallindrome")
 }else{
    console.log("it is not  a pallindrome")
 }
 return copyNumber == rev 
}
// console.log(reverseInteger())