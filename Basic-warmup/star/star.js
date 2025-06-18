//Question 1:
/*

* * * *
* * * *
* * * *
* * * *

*/

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < 4; j++) {
    row += "*";
    // console.log("Answer !:",row);
  }
}

//Question 2

/*

*
* *
* * *
* * * * 
* * * * *


*/

let row = " ";
for (let i = 0; i < 5; i++) {
  row = row + "*";
  // console.log("Answer 2:",row)
}

for (let i = 0; i < 5; i++) {
  let row2 = " ";
  for (let j = 0; j < i + 1; j++) {
    row2 = row2 + "*";
  }
  // console.log("Answer 2:",row2)
}

//Question 3

/*

1
1 2 
1 2 3
1 2 3 4
1 2 3 4 5


*/

for (let i = 1; i <= 5; i++) {
  let value = " ";
  for (let j = 1; j <= i; j++) {
    value = value + j;
  }
//   console.log("Answer 3:", value);

}

//Question 4

/*

1
2 2 
3 3 3
4 4 4 4
5 5 5 5 5


*/


for(let i = 1 ; i < 6; i++){
    let value = " ";
    for(let j = 0; j < i ; j++){
        value = value + i
    }
    // console.log("Answer 4:", value);
}


//Question 5

/*





1 2 3 4 5
1 2 3 4
1 2 3
1 2
1


*/

for(let i = 6 ; i > 0; i--){
    let value = " ";
    for(let j = 1; j < i ; j++){
        value = value + j
    }
    //  console.log("Answer 5:", value);
   
}

//Question 6

/*





        *
      * *
    * * *
  * * * *
* * * * *


*/

for(let i = 1 ; i<6; i++){
    let row = " "
    for(let j =1 ; j <= 6 -i ; j++){
        row = row + " "
    }
    for(let k =1;k<=i;k++){
        row = row + "*"
    }
    // console.log"Answer 6:"(row)
}


//Question 7

/*

1
10
101
1010
10101
101010



 


*/

for(let i = 1 ; i<=6; i++){
    let row = ""
    for(let j =1 ; j <= i ; j++){
        if(j%2 == 0){
            row = row + "0"
        }else{
            row = row + "1"
        }
    }
    // console.log(row) 
}


//Question 8

/*

1
1 0
0 1 0
0 1 0 1
1 0 1 0 1



 


*/

let toggle = "0"
for(let i = 1 ; i<=5; i++){
    let row =""
    for(let j =1 ; j <= i ; j++){
        if(toggle == 0){
            toggle = 1
        }else{
            toggle = 0
        }
       row = toggle + row
    }
    console.log(row) 
}