'use strict'

function even(arr) {
  const new_arr = []
  for (let i= 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      new_arr.push(arr[i])
    }
  }
  return new_arr
}

const original_array = [2,5,6,7,8]
let result = even(original_array)
console.log(original_array,result)