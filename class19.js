// THE JSWAY CHAPTER 7

//Musketeers

// const musketeers = ["Athos", "Porthos", "Aramis"]

// for(let i = 0; i < musketeers.length; i++){
//   console.log(musketeers[i])
// }
// musketeers.unshift("D'Artagnan")
// musketeers.forEach(musketeer => {
//   console.log(musketeer)
// })
// musketeers.pop()
// for(const musketeer of musketeers){
//   console.log(musketeer)
// }


//Sum of Values

// const values = [3, 11, 7, 2, 9, 10]

// let sum = 0

// for(let i = 0; i < values.length; i++){
//   sum += values[i]
// }
// console.log(sum)


//Array Maximum

const values = [3, 11, 7, 2, 9, 10]

console.log(Math.max(...values))



//List of Words

// let userWord = prompt("Type in a word")

// let words = ['Hello', 'World', 'Out', 'There']

// if(userWord === 'stop'){
//   words.forEach(word => console.log(word))
// }else{
//   prompt("Type in a word")
// }



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

