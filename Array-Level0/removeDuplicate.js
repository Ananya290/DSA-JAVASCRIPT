//Question 1 :Remove Duplicate From an array.

arr = [1,2,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,6,7,7,8,9,10]

//Solution1:
let newarr = [...new Set(arr)];
 console.log(newarr)


//Soltuion2:
let removeduplicate = [];

for(let i = 0; i < arr.length; i++) {
    if(!removeduplicate.includes(arr[i])) {
        removeduplicate.push(arr[i]);
    }
}
 console.log(removeduplicate)

/*Question 2 :Remove Duplicates from sorted Array

1.non-decreasing order --- it is not necessary that each and every value should be greater than previous value.
2. in-place= do not create new array chnage same array.
arr = [0,0,1,2,3,4,4,4,4,4,5,5,6,7] 
*/
//LeetCode Question 26

arr = [0,0,1,2,3,4,4,4,4,4,4,4,4,4,5,5,6,7] 

function removeDuplicate(){
let x = 0;

for(let i =0;i <arr.length;i++){
    if(arr[i]>arr[x]){
        x =x+1;
        arr[x]=arr[i]
    }
}
return (x+1);
}

console.log(removeDuplicate())