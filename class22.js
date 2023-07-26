// THE JSWAY CHAPTER 7 - ARRAYS

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