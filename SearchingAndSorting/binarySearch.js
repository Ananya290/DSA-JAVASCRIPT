//LeetCode Question

function binarySearch(nums,target){
    let left = 0;
    let right = nums.length-1;

    while(right >= left){
        middle = Math.floor((left+right)/2);
        if(nums[middle] === target){
            return console.log(`Element found at index ${middle} Successfully`);
        }else if(nums[middle]> target){
            right = middle -1
        }else{
            left = middle +1
        }
    }
    return -1
    
}


arr = [-1,0,1,3,5,7,9,10]
// arr1 = [1]
target = 1
binarySearch(arr,target)


/*
Time complexity = everytime n is diving by 1/2 =  log2n
Space complexitu = O(1)
here any number of input will come only 3 new varible will use.

*/