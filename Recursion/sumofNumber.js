//wrtie a program that print the sum of number


//Method1:

function Sum(num){
    if(num == 0) return 0;
    
    return num + Sum(num-1)
}
num = 7
console.log(Sum(num))










// Method2:
num = 7
let i = 1;
let sum = 0;
function sumofNumber(){
   
 if(i > num) return ;
 sum = sum + i;
 i++;
 sumofNumber()

 return sum;
}

console.log(sumofNumber())
//Method3 :
let sum2 =0;
function sumusingReverse(){
   if(num == 0) return 0;
     sum2 = sum2 + num;
     num--;
     sumusingReverse()
     return sum2
}
console.log(sumusingReverse());