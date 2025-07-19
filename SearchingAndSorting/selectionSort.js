//Selection Sort
/*
Selection sort is a simple comparison-based sorting algorithm. It works by repeatedly finding the smallest (or largest, depending on sorting order) 
element from the unsorted part of the array and swapping it with the first unsorted element. 
This process is repeated, moving the boundary of the sorted and unsorted parts of the 
array, until the entire array is sorted.

Start with the first element.
Search the entire unsorted part of the array to find the smallest element.
Swap it with the first element.
Move to the second position, repeat the process for the rest of the array.
Continue this until the array is fully sorted.

*/

function SelectionSort() {
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}

arr = [2, 1, 5, 3, 4, 9];
console.log(SelectionSort(arr));

//Time Complexity - O(n2)
//Space Complexity - O(1) 