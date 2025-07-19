//Insertion Sort

nums = [4, 1, 2, 7, 3, 9];
function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let prev = i - 1;
    while (curr < nums[prev] && prev >= 0) {
      nums[prev + 1] = nums[prev];
      prev--;
    }
    nums[prev + 1] = curr;
  }
  return nums;
}

console.log(insertionSort(nums));
