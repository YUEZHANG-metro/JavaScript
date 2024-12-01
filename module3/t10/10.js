'use strict'

const firstElement = document.querySelector('input[name="firstname"]')
const lastElement = document.querySelector('input[name="lastname"]')


const submitElement = document.querySelector('input[type="submit"]')
const targetElement = document.querySelector('#target')

submitElement.addEventListener('click', (e)=> {
  e.preventDefault();
  const firstName = firstElement.value;
  const lastName = lastElement.value
  targetElement.innerHTML = `Your name is ${firstName} ${lastName}.`
})
