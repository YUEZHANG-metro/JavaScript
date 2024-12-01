'use strict'

const inputElement = document.querySelector('#calculation')
const buttonElement = document.querySelector("#start")
const resultElement = document.querySelector("#result")

// const operators = ['+',"-","*","/"]

buttonElement.addEventListener('click', () => {
  const userInput = inputElement.value;
  let operator;
    if (userInput.includes('+')) {
      operator = "+"
    } else if (userInput.includes('-')) {
      operator = "-"
    } else if (userInput.includes('*')) {
      operator = "*"
    } else if (userInput.includes('/')) {
      operator = "/"}
    else {
      resultElement.innerHTML = 'Invalid'
  }

  const [num1, num2] = userInput.split(operator).map(Number)

  let result;
    if (operator === '+') {
      result = num1 + num2;
    } else if (operator === '-') {
      result = num1 - num2;
    } else if (operator === '*') {
      result = num1 * num2;
    } else if (operator === '/') {
      result = Math.floor(num1 / num2);}

  resultElement.innerHTML = `${result}`
    });