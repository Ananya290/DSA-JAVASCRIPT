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

//Leet Code Question 9: By using function find the pallindrome.

function reverseInteger(){
    let number = 121;
    let copyNumber = number;
    let rev = 0;
    while(number > 0){
        let rem = number % 10;
        rev = (10 * rev) + rem;
        number = Math.floor(number / 10);
    }
    if(copyNumber == rev){
        return true;
    } else {
        return false;
    }
}
console.log(reverseInteger())


