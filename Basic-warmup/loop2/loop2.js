//Question 1 :Write a function that search for an element in an array and return the index,if element is not present then just return -1 

arr = [12,13,11,14,17,19]

 function searchOperation(value){
 for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] == value){
        return i;
        // arr.indexOf(arr[i]);
    }
 }
 return -1;
}
let output = searchOperation(19)
console.log("Answer 1 :",output)


//Question 2 :Write a function that returns the nageative number in an array
arr = [12,13,11,14,17,19, -23, -9,9,-2,-3]
count = 0;

function countnegative(){
 for(let i = 0 ; i < arr.length ; i++){
 if(arr[i] < 0){
    count = count+1;   
 }
 }  
  return count; 
}
console.log( "Answer 2 :",countnegative());


//Question 3: Write a function which return largest number in the array.
arr = [12,13,11,14,17,19, -23, -9,9,-2,-3]
    largest = arr[0];

function findlargestnumber(){
    for(let i = 0 ; i < arr.length ; i++){
       if(largest < arr[i]){
        largest = arr[i];

       }
    }
    return largest;
}
 let largestnumber = findlargestnumber();
 console.log("Answer 3 :",largestnumber)

 //Question 4: Write a function which return smallest number in the array.
arr = [12,13,11,14,17,19, -23, -9,9,-2,-3]
    smallest = Infinity;

function findsmallestnumber(){
    for(let i = 0 ; i < arr.length ; i++){
       if( arr[i] < smallest ){
        smallest = arr[i];

       }
    }
    return smallest;
}
 let smallestnumber = findsmallestnumber();
 console.log("Answer 4 :",smallestnumber)