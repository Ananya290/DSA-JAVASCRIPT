
// Given a binary array nums, return the maximum number of consecutive 1's in the array.



 function findMaxConsecutiveOnes(nums) {
    currentCount =0;
    maxCount = 0;

    for(let i = 0; i < nums.length ; i++){
        if(nums[i]== 1){
            currentCount++;
            if(currentCount > maxCount){
            maxCount = currentCount;   
        }
        }else{
            currentCount =0;
        }    
    }
    return maxCount;
};

nums= [1,1,0,1,1,1]
console.log(findMaxConsecutiveOnes(nums))