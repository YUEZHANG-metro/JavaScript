'use strict'

function number() {
  let number = parseInt(prompt("How many candidates?"))
  let candidates = []
  for (let i=0; i<number; i++)
    let name = prompt(`Name for candidate ${i+1}`)
    candidates.push({name:name, votes:0})
    console.log(name)
  }

function vote() {
  for (let i=0; i<candidates.length;i++){
    result = [
      {name:candidate[0], votes:0}
    ]
  }
}
