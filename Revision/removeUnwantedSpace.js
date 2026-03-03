const arr = [1, 2, 3, 4, 5, , 6, 7, 8, , 9, , 9, 0, 0, , , , 1, 2, 3, 4, , 5];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== undefined) {
    newArr.push(arr[i]);
  }
}

console.log(newArr);
