'use strict'

function getNumber() {
  let roll_number= Math.floor((Math.random() * 6) + 1);
  return  roll_number;
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
}

roll_check();



