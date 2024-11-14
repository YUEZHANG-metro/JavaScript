'use strict';

function participate() {
  let participants = []
  let people_number = parseInt(prompt("How many participants?"))

  for (let i = 0; i < people_number; i++) {
    name = prompt("Enter a user name : ")
    participants.push(`<li>${name} </li>`)
  }

  participants.sort()

  let nameShown = `<ol>${participants.join(" ")}</ol>`;
  document.querySelector("#participants").innerHTML = nameShown;
}
