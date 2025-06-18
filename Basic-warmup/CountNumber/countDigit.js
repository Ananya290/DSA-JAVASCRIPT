//Write a function to count the number of digit.
 
 
count = 0;
function countDigit(num){
    while(num > 0){
     num = Math.floor(num / 10)
    count = count +1
    }
    return count;
}
console.log(countDigit(123456789))