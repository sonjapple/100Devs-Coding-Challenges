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

// const values = [3, 11, 7, 2, 9, 10]

// console.log(Math.max(...values))


//List of Words

// function listOfWords(){
//   let userWord = ''

//   while(userWord !== 'stop'){
//     userWord = prompt('Enter a word').toLowerCase()
    

//     if(userWord !== 'stop'){
//       console.log(userWord)
//     }
//   }
// }
// listOfWords()



// THE JSWAY CHAPTER 6 - OBJECTS

//Adding Character Experience

// const aurora = {
//   name: "Aurora",
//   health: 150,
//   strenght: 25,
//   xp: 0,

//   describe(){
//     return `${this.name} has ${this.health} health points, ${this.strenght} as strength and ${this.xp} XP points`
//   }
// }

// //Aurora is harmed by an arrow
// aurora.health -= 20

// //Aurora is equips a strength necklace
// aurora.strenght += 10

// //Aurora learns a new skill
// aurora.xp += 15

// console.log(aurora.describe())


//Modeling a Dog

// const myDog = {
//   name: "Skye",
//   species: "Bulldog",
//   size: "large",
//   bark(){
//     return `bark bark BARK!!`
//   }
// }
// console.log(`${myDog.name} is a ${myDog.species} dog measuring as ${myDog.size}`)
// console.log(`Look, a bird! ${myDog.name} barks: ${myDog.bark()}`)


//Modeling a Circle

// const r = Number(prompt("Enter the circle radius:"))

// const circle = {
//   circumference(){
//     return ((2) * Math.PI) * (r)
//   },
//   area(){
//     return (Math.PI) * (r * r)
//   }
// }
// console.log(`It's circumference is ${circle.circumference().toFixed(2)}`)
// console.log(`It's area is ${circle.area().toFixed(2)}`)



//Modeling a Bank Account

// const account = {
//   name: "Alex",
//   balance: 0,
//   credit(){
//     return account.balance + 250 - 80
//   },
//   describe(){
//     return `owner: ${this.name}, balance ${this.credit()}`
//   }
// }
// console.log(account.describe())



//JAVASCRIPT.INFO - ARRAY METHODS

//Translate border-left-width to borderLeftWidth

// function camelize(str){
//   return str
//   .split('-')

//   .map(
//     function(word, index){
//       if(index == 0) {
//         return word.toLowerCase()
//       }else {
//         return word[0].toUpperCase() + word.slice(1)
//       }
//     }
//   )
//   .join('')
// }
//console.log(camelize('background-color'))
//console.log(camelize('list-style-image'))
//console.log(camelize('-webkit-transition')) //??


//Filter range

// function filterRange(arr, a, b){

//   return arr.filter(item => (a <= item && item <= b))
// }

// let arr = [5, 3, 8, 1]
// let filtered = filterRange(arr, 1, 4)

// console.log( filtered )
// console.log( arr ) 


//Filter range "in place"

// function filterRangeInPlace(arr, a, b){

//   for(let i = 0; i <= arr.length; i++){
//     if(arr[i] < a || arr[i] > b){
//       arr.splice(i, 1)
//       i-- //reset i to delete a number so it doesn't skip numbers
//     }
//   }
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// filterRangeInPlace(arr, 0, 6)
// console.log(arr)


//Sort in decreasing order

// let arr = [5, 2, 1, -10, 8]

// arr.sort((a, b) => b - a)

// console.log(arr)


//Copy and sort array

// function copySorted(arr){
//   return arr.slice().sort()
// }

// let arr = ["Martin", "Frank", "Quintin", "Becky"]

// let sorted = copySorted(arr)

// console.log(sorted)
// console.log(arr)


//Create an extendable calculator

// function Calculator() {

//   this.methods = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b
//   }

//   this.calculate = function(str){
//     let splitString = str.split(' '),
//       a = +splitString[0],
//       op = splitString[1],
//       b = +splitString[2]

//     if(isNaN(a) || isNaN(b)){
//       return NaN
//     }
//     return this.methods[op](a, b)
//   }

//   this.addMethod = function (name, func) {
//     this.methods[name] = func
//   }
// }
// let calc = new Calculator
// console.log(calc.calculate("12 + 7"))

// let powerCalc = new Calculator
// powerCalc.addMethod("*", (a, b) => a * b)
// powerCalc.addMethod("/", (a, b) => a / b)
// powerCalc.addMethod("**", (a, b) => a ** b)

// let result = powerCalc.calculate("3 ** 3")
// console.log( result )
// console.log(powerCalc.methods) //shows the new methods added


//Map to names

// let john = {name: "John", age: 25}
// let pete = {name: "Pete", age: 30}
// let mary = {name: "Mary", age: 28}

// let users = [john, pete, mary]

// let names = users.map(item => item.name)

// console.log(names)


//Map to objects

// let john = {name: "John", surname: "Smith", id: 1}
// let pete = {name: "Pete", surname: "Hunt", id: 2}
// let mary = {name: "Mary", surname: "Key", id: 3}

// let users = [john, pete, mary]

// let usersMapped = users.map(user => ({
//   fullName: `${user.name} ${user.surname}`,
//   id: user.id
// })) //Remember the object must be inside (), else the code will try to run a function instead of creating an object
// console.log(usersMapped)


//Sort users by age

// let john = {name: "John", age: 25}
// let pete = {name: "Pete", age: 30}
// let mary = {name: "Mary", age: 28}

// let arr = [pete, john, mary]

// function sortByAge(arr){
//   arr.sort((a, b) => a.age - b.age)
// }

// sortByAge(arr)

// console.log(arr[0].name)
// console.log(arr[1].name)
// console.log(arr[2].name)


//Shuffle an array
// let array = [1, 2, 3]

// function shuffle(array){
//   for(let i = array.length - 1; i > 0; i--){
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }
// shuffle(array)
// console.log(array)


//Get average age
// let john = {name: "John", age: 25}
// let pete = {name: "Pete", age: 30}
// let mary = {name: "Mary", age: 29}

// let arr = [john, pete, mary]

// function getAverageAge(users){
//   users.reduce((prev, user) => prev + user.age, 0) / users.length
// }
// console.log(getAverageAge(arr))



//Filter unique array members
// function unique(arr) {
//   let result = []

//   for(let str of arr) {
//     if(!result.includes(str)){
//       result.push(str);
//     }
//   }
//   return result
// }

// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ]

// console.log(unique(strings))


//Create keyed object from array
// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ]

// let usersById = groupById(users)

// function groupById(array){
//   return array.reduce((obj, value) => {
//     obj[value.id] = value
//     return obj
//   }, {})
// }

// function groupById(array){
//   let result = {}
//   array.forEach((item) =>result[item.id] = item )
//   return result
// }

// console.log(usersById)


//ELOQUENT JAVASCRIPT CHAPTER 4 - OBJECTS AND ARRAYS