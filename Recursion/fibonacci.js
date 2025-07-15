//Question 509:leetcode --- Fibonacci Number

function fn(n){
    if( n <= 1) return n;
  return fn(n-1)+ fn(n-2)
}

console.log(fn(9))

//-----------------------------------------------------------------------------------

function fibo(n){
  let a = 0 ;
  let  b = 1;
  if( n <= 1) return n;
  for(let i = 2; i<=n; i++){
    let next = a +b
    a = b;
    b = next
  }
  return b;

}
console.log(fibo(9))


// Rabit Population question 

// Fibonacci series

function printFibonacciSeries(n){
  let a =0;
  let b = 1;
  let series =[];
  for(let i = 0; i<=n; i++){
    series.push(a);
    let next = a+b;
    a =b;
    b= next;
  }
  console.log(series.join(','));
}

printFibonacciSeries(8)