//Merge Sort - divide and conquer method

function merge(left,right){
    let i = 0;
    let j =0;
    let newarr =[]
   while(i < left.length && j < right.length){
    if(left[i]<right[j]){
        newarr.push(left[i])
        i++
    }else{
        newarr.push(right[j])
        j++
    }
   }
    return [...newarr ,...left.slice(i),...right.slice(j)]
}

function mergeSort(nums){
    if(nums.length <=1) return nums;
   let  middle = Math.floor((nums.length)/2)
    let left = mergeSort(nums.slice(0,middle));
   let  right = mergeSort(nums.slice(middle));
    return merge(left,right)

}

nums=[9,5,1,7,2,6,3,10]
console.log(mergeSort(nums))