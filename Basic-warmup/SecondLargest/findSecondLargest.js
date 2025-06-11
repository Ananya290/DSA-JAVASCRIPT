arr = [12, 13, 14, 65, 98, 50, 98];
let firstLargest = -Infinity;
let secondLargest = -Infinity;

//First way------------------------------------------------------------------------
function findSecondLargestmethod1() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      firstLargest = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && firstLargest > arr[i]) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let output = findSecondLargestmethod1();
console.log("Answer 1:", output);

//second way-------------------------------------------------------------------------------------

function findSecondLargestmethod2() {
  if (arr.length < 2) {
    return null;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && firstLargest > arr[i]) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

console.log("Answer 2 :", findSecondLargestmethod2());


//third way---------------------------------------------------------------------------------------------------------
rawvalue = [...new Set(arr)]
console.log(rawvalue)
let sortarr = rawvalue.sort((a,b)=> b-a)
console.log("sortarr",sortarr)
console.log("firstLargest",sortarr[0])
console.log("SecondLargest",sortarr[1])

