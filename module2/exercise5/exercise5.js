// Write a program that prompts the user for numbers. When the user enters one of the numbers he previously entered, the program will announce that the number has already been given and stops its operation and then prints all the given numbers to the console in ascending order.

'use strict';
// solution 1
function exercise5() {
  let numbers = []

  while (true) {
    let number = parseInt(prompt("Enter a number"));
    if (numbers.includes(number)) {
      alert("Duplicated number");
      break;
    } else {numbers.push(number)}
  }
  numbers.sort((a,b) => a -b)
  for (let j =0; j< numbers.length;j++){
  console.log(numbers[j])
  }
}

//solution 2

function exercise5_2() {
  let numbers = []
  let duplicated = false

  while (!duplicated) {
    let number = parseInt(prompt("Enter a number"));

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === number) {
        alert("Duplicated number");
        duplicated = true;
        break;
      }
    }
    if (!duplicated) {
      numbers.push(number)
    }
  }

  numbers.sort((a,b) => a -b)
  for (let j =0; j< numbers.length;j++)
    {
    console.log(numbers[j])
    }

}