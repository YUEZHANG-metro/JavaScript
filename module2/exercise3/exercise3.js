// Write a program that asks for the names of six dogs. The program prints dog names to unordered list <ul> in reverse alphabetical order.
'use strict'

function dogName() {
  let dogNames = []

  for (let i = 0; i < 6; i++) {
    let dog_name = prompt("Enter a name of dog" )
    if(dog_name !== "") {dogNames.push(`<li>${dog_name}</li>`)}
    else {alert("you have to type something")}
  }

  dogNames.sort().reverse();

  let dogShown = `<ul>${dogNames.join(" ")}</ul>`
  document.querySelector("#dogNames").innerHTML = dogShown

}