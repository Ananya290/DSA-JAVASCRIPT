/*


*/


val = 1
nums = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,3,4,5,6]

function removeElement(){
   
    x=0;
      for(let i = 0; i <nums.length; i++){
    if( nums[i] !== val)
    { nums[x]=nums[i]
        x=x+1;
          
}

};
return x
}
console.log(removeElement())