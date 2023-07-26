// ELOQUENT JAVASCRIPT CHAPTER 2

//Looping a Triangle

// for(let number = "#"; number.length < 7; number+="#"){
//   console.log(number)
// }


//FizzBuzz

// function fizzBuzz(num){
//   for(let i = 1; i <= num; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//       console.log("FizzBuzz")
//     }else if(i % 3 === 0){
//       console.log("Fizz")
//     }else if(i % 5 === 0){
//       console.log("Buzz")
//     }else{
//       console.log(i)
//     }
//   }
// }
// fizzBuzz(100)


//Chessboard

let size = 10 
//this is the variable setting

let board = ""
//this is the empty string we're going to add either ' ' , '#' or newline

for (let y = 0; y < size; y++) {   
  /*in the outer loop we add newline to seperate rows*/

  for (let x = 0; x < size; x++) {
    /*every inner loop represents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/

    if ((x + y) % 2 === 0){
      board += " "
    }else{
      board += "#"
    }
  }
  board += "\n"
}
console.log(board)


//ELOQUENT JAVASCRIPT CHAPTER 3

//Minimum
function min(a, b){
  if(a < b){
    console.log(a)
  }else{
    console.log(b)
  }
}
min(10, -4)

//Recursion

function isEven(num){
  if(num % 2 === 0){
    console.log(true)
  }else if(num % 2 != 0){
    console.log(false)
  }else{
    console.log(isEven - 2)
  }
}
isEven(50)
isEven(75)
isEven(-2) //??

//Bean Counting

function countBs(str){
  let count = 0
  for(let i = 0; i <= str.length-1; i++){
    if(str[i] === "B"){
      count += 1
    }
  }
  return count
}
console.log(countBs("ButterBall"))

