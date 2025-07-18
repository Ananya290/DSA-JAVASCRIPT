
/* Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. 
  */

  function bubbleSort(nums){
   
    for(let i = 0; i<nums.length-1;i++){
        let isSwapped = false;
    for(let j = 0; j<nums.length-1-i;j++){
        if(nums[j]>nums[j+1]){
            temp = nums[j]
            nums[j]= nums[j+1]
            nums[j+1]= temp

            isSwapped = true;
        }
    }
    if(!isSwapped) break;
    }

    return nums;

  }



let nums=[2,4,1,7,8,5,9,3]
console.log(bubbleSort(nums))