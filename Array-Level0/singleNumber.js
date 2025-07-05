/*136. Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.
*/


nums= [1,2,3,3,1]

function findSingleNumber(){
    let xor = 0;
    for(let i =0; i<nums.length;i++){
        xor = xor ^ nums[i]
    }
    return xor;

}

console.log(findSingleNumber())