'use strict'

function concat(items) {
  // const items = []
  let result = ''
  for (let i = 0; i < items.length; i++) {
    result += items[i]
  }
  return result
}
const names = ['Johnny', 'DeeDee', 'Joey', 'Marky']
let result = concat(names)
console.log(concat())
