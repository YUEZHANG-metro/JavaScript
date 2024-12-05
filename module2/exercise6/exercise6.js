'use strict'

const listHtml = document.createElement('ul')
document.body.appendChild(listHtml);

function getNumber() {
  return Math.floor((Math.random() * 6) + 1);;
}

function roll_check(){
  let result = []
  let point

  do {
    point = getNumber()
    result.push(point)
    console.log(`Rolled:${point}`)
  } while (point !== 6);

  console.log(result)
  for (const r of result) {
    const listItem = document.createElement('li');
    listItem.textContent = `Rolled: ${r}`;
    listHtml.appendChild(listItem);
  }
}




