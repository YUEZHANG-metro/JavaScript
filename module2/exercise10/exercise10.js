'use strict'
let candidates = [];

function number() {
  let number = parseInt(prompt("How many candidates?"))

  if (isNaN(number) || number<= 0) {
    alert("Invalid input.")
    return;
  }

  for (let i=0; i<number; i++) {
    let name = prompt(`Name for candidate ${i+1}`);
    if (name) {
      candidates.push({
        name:name,
        votes:0
      });
    } else {
      alert("Name cannot be empty.")
      candidates =[];
      return;
    }
    console.log(candidates)
  }
}

function vote() {
    let totalVoters = parseInt(prompt("How many voters?"))
    for (let i=0; i < totalVoters; i++ ) {
      let choice = prompt(`who will you vote for?`)
      let candidate = candidates.find(c => c.name.toLowerCase() === choice)
      if (candidate) {
        candidate.votes++;
      } else {
        alert("choose to vote again")
      }
    }
}

function display() {
  let maxVotes = Math.max(...candidates.map(c => c.votes ));
  let winners = candidates.filter(c => c.votes === maxVotes);
  console.log(`winner is ${winners.map(w => w.name).join(' and ')} with ${maxVotes} votes`)
  console.log("results")
  candidates.forEach(c => console.log(`${c.name}:${c.votes} votes.`))
}

