'use strict'


function getNumber() {
  let dice = parseInt(prompt("Give a number"))
  let roll_number = Math.floor((Math.random() * dice) + 1);
  return roll_number;
}

function roll_check(){
  let result = []
  let point

  do {
    point = getNumber()
    result.push(point)
    console.log(`Rolled:${point}`)
  } while (point !== dice);

  console.log(result)
}

roll_check();