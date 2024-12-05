'use strict'

const listHtml = document.createElement('ul')
document.body.appendChild(listHtml);
const totalNumberStr = prompt("enter a number")
const totalNumber= parseInt(totalNumberStr)

function getNumber() {
  return Math.floor((Math.random() * totalNumber) + 1);;
}

function roll_check(totalNumber){

  let result = []
  let point

  do {
    point = getNumber()
    result.push(point)
    console.log(`Rolled:${point}`)
  } while (point !== totalNumber);

  for (const r of result) {
    const listItem = document.createElement('li');
    listItem.textContent = `Rolled: ${r}`;
    listHtml.appendChild(listItem);
  }
}