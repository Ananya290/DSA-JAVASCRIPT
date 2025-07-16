let values = [1,2,5,3,9,0,2,-10]
let target = 10

function linearSearch(values,target){
    for(let i = 0; i < values.length; i++){
        if(values[i] == target) return i;
    }
    return -1;
}

console.log(linearSearch(values, target))