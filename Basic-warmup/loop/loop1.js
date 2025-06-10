// For Loop

for(let i = 2 ; i < 100; i = i+2){
    // console.log(i)
}

//print all odd number from the given array.

arr = [12,1,4,12,2,32,2,5]

for(let i = 0; i < arr.length ; i++){
    if(arr[i]%2 != 0){
        console.log(arr[i], 'is odd number')
    }
}


////print all even number from the given array.

arr = [12,1,4,12,2,32,2,5]

for(let i = 0; i < arr.length ; i++){
    if(arr[i]%2 == 0){
        console.log(arr[i], 'is odd number')
    }
}


//While loop

//Table of two
let i =1;
 while(i<5){
    console.log(i*2)

    i++;
 }