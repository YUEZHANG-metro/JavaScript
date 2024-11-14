// Write a program that prompts the user for five numbers and prints them in the reverse order they were entered. Print the result to the console.

'use strict';
let numbers = []
function getNumber() {
  let number
  do {
    number = parseInt(prompt("Enter a number","You need type 5 numbers"))
  } while (isNaN(number)) //isNan‘s syntax. value is what you are tesing,
  return number;
}

function reverse() {
  for (let i = 0; i < 5; i++) {
    let number
    number = getNumber()
    numbers.push(number)
    }

  for (let n=numbers.length-1; n>=0; n--) {
    console.log(numbers[n])
  }
}


