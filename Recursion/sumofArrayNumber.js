//Find the sum of number of array.

num = [1,2,3,4,5,6,7,100]

function sumofArray(i){
 if(i == 0) return num[i] ;
 return num[i]+ sumofArray(i-1)
 
}

console.log(sumofArray(num.length-1))


// Find the sum of all odd number.
function sumofOdd(i){
    isOdd = num[i]%2 != 0 ;
if(i == 0) {
    return isOdd ? num[i] : 0;
} 
return isOdd ? num[i]+ sumofOdd(i-1) : 0 + sumofOdd(i-1) 



}
console.log(sumofOdd(num.length-1))



