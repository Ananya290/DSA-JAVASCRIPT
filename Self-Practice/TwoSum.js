
// LeetCode Question 1 : Two Sum

nums =[1,2,3,7]
target=8;


   let indices=[];
for(let i =0; i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]+nums[j] == target){
             indices = [i,j]
        }
    }
  }
  console.log(indices)
