//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.


nums = [0,1]
function findMissing(){
    let n = nums.length
    averageNumber = (n * (n +1))/2
    sum = 0;
    for(let i =0 ; i<nums.length;i++){
        sum = sum + nums[i]
    }
    return averageNumber - sum;
}
console.log(findMissing())