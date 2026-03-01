// Write a function that moves all 0s to the end of an array without changing the order of other elements.

arr = [1,2,0,0,0,3,7,6,0,8]
index =0

function moveZeros(){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            arr[index] = arr[i]
            index++
        }       
    }

     while(index < arr.length){
            arr[index] = 0
            index++
        }
 return arr;


}

console.log(moveZeros())

