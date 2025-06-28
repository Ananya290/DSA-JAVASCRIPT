//Question 1 : Reverse string
let s = ["a","b","c","d","e","f"]
function reverseString() {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
};


console.log(reverseString())



// there is one another way to solve this issue by using for loop ...check that if you want more to explore.