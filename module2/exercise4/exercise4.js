//Write a program that asks the user for numbers until he gives zero. The given numbers are printed in the console from the largest to the smallest.

'use strict';
let numberArray = []

function getNumber(){
  return parseInt(prompt("Enter a number"))
}

function numberAndSort() {
  let number
    do {
      number = getNumber()
      if (number !== 0) {
        numberArray.push(number)
      }
    } while (number !== 0)

  numberArray.sort((a, b) => b - a);

    for (let n = 0; n < numberArray.length; n++) {
    console.log(numberArray[n])
  }
}