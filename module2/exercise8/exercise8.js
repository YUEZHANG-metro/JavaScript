'use strict'
const html = document.createElement('p')
document.body.appendChild(html)
const items = ['Johnny', 'DeeDee', 'Joey','Marky']

function concat(items) {
  let result='';
  for (let i = 0; i < items.length; i++) {
    result += items[i]
  }
  return result
}

html.innerHTML = concat(items);

