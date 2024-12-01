'use strict'

const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const operationElement = document.querySelector("#operation")
const buttonElement = document.querySelector("#start")
const resultElement = document.querySelector("#result")

function calculate(num1,num2) {
  if (operationElement.value === "add") {
    return num1 + num2
  } else if (operationElement.value === "sub") {
    return num1 - num2
  } else if (operationElement.value === "multi") {
    return num1 * num2
  } else {
    return num1 / num2
  }
}

buttonElement.addEventListener('click', () =>{
  const numOne = parseFloat(num1.value)
  const numTwo = parseFloat(num2.value)
  const result = calculate(numOne, numTwo)
  resultElement.innerHTML = `${result}`
});

