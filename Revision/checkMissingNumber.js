arr=[1,2,4,5,6,7]

actualSum=0
let length = arr.length +1;
expectedSum = (length*(length +1))/2


for(let i =0; i <arr.length ; i++){
    actualSum += arr[i]
}

missingValue = expectedSum - actualSum
console.log("missingValue: ", missingValue)
console.log(expectedSum)
console.log(actualSum)