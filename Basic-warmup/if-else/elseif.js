//Eligible to vote 

function checkEligibility(age){
    if(age>=18){
        console.log("u r eligible to vote")
    }
    else if(age<1){
  console.log("wrong input")

    }
     else{
  console.log("u r not  eligible to vote")

    }
}

checkEligibility(0)

///Check Even or odd

function isEvenodd(num){
 if(num == 0){
    console.log("you enter 0");
 }else if(num % 2 == 0){
    console.log("Its a even number");
 }else{
    console.log("its a odd number")
 }
}
isEvenodd(7)