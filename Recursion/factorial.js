//Write the program for factorial of a number.


function factorial(num){
     if(num == 0) return 1;
     
     return num * factorial(num -1);
}

num = 3
console.log(factorial(num))