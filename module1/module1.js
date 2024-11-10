// exercise 1
console.log('I am printing to console')

// exercise 2
function greeting() {
  const name=prompt("What's your name?")
  document.getElementById("greeting").textContent = 'Hello, ' + name + '!';
}

// exercise 3
function simple_calculater(){
  const aStr= prompt("Enter an integer:")
  const bStr= prompt("Enter an integer:")
  const cStr= prompt("Enter an integer:")

  const a = parseInt(aStr)
  const b = parseInt(bStr)
  const c = parseInt(cStr)

  let sum = a+b+c
  let product = a*b*c
  let average = sum / 3

  document.getElementById("add").textContent = 'Sum of these number is ' + sum + '.';
  document.getElementById("product").textContent = 'Product of these number is ' + product + '.';
  document.getElementById("average").textContent = 'Average of these number is ' + average + '.';
}

//exercise 4
function sort_hat() {
  const hat = Math.floor(Math.random() * 4) + 1;
  const Magic_name = prompt("Enter your name:")

  if (hat === 1) {
  document.getElementById("hats").textContent = Magic_name + ' is in Gryffindor.';
  } else if (hat ===2) {
    document.getElementById("hats").textContent = Magic_name + ' is in Slytherin.';
  } else if (hat === 3) {
    document.getElementById("hats").textContent = Magic_name + ' is in Hufflepuff.';
  } else {
    document.getElementById("hats").textContent = Magic_name + ' is in Ravenclaw.';
  }
}

//exercise 5
function leap_year() {
  const year = prompt("Enter a year:")
  if (year % 4 ===0 && year % 100 !== 0) {
    document.getElementById("leap").textContent = year + ' is a leap year.';
  } else if (year & 100 ===0 && year % 400 ===0) {
    document.getElementById("leap").textContent = year + ' is a leap year.';
  } else {document.getElementById("leap").textContent = year + ' is not a leap year.'};
}


//exercise 6
function square_or_not() {
  const answer = confirm('Should I calculate the square root?');
  if (!answer)
  {
    document.getElementById("square").textContent = 'The square root is not calculated.';
  }
  else
  {
    const number_root_Str = prompt("Enter a number:")
    const root = parseInt(number_root_Str)
      if (root >= 0){
        const square = root ** 2
        document.getElementById("square").textContent = 'The square is ' + square + '.';
      }
      else {
        document.getElementById("square").textContent = 'The square root of a negative number is not defined';
      }
  }
}

//exercise 7

function dice_roll(){
  const total_str = prompt('How many dice rolls?');
  const total = parseInt(total_str);
  let time = 0;
  let sum = 0

  do {
    r = Math.floor(Math.random() * 6) + 1
    console.log(r)
    sum = sum + r
    time++;}  while (time < total);

  document.getElementById("dice").textContent = 'Sum is ' + sum + '.'
}

//exercise 8
function print_leap() {
  const start_str = prompt('Enter a start year:')
  const end_str = prompt('Enter a end year:')
  const start = parseInt(start_str)
  const end = parseInt(end_str)

  const list_year = document.getElementById("print_leap");

  list_year.innerHTML = '';

  for (let i=start; i <= end; i++) {
    if ((i % 4 ===0 && i % 100 !== 0)||(i % 400 ===0)) {
      const listItem = document.createElement('li');
      listItem.textContent = i
      list_year.appendChild(listItem)
    }
  }
}


// exercise 9
function prime_or_not() {
  const number = parseInt(prompt("Enter a number:"))

  if (number <= 2) {
    document.getElementById("prime").textContent = number + ' is a prime number'
  } else {
    for (let divider = 2; divider < number; divider++)
      if (number % divider === 0) {
        document.getElementById("prime").textContent = number +
            ' is not a prime number';
        return;
      } else {
        document.getElementById("prime").textContent = number +
            ' is a prime number'
      }
  }
}

// exercise 10
function dice() {
  const dices = parseInt(prompt("Enter how many dices:"));
  const sum_of_eyes = parseInt(prompt("Enter a sum number:"));
  let counter = 0;
  const times = 10000;

  for (let t = 0; t < times; t++) {
    let dice_total = 0;

    for (let i = 0; i < dices; i++) {
      const dice_number = Math.floor(Math.random() * 6) + 1
      dice_total += dice_number;
    }

    if (dice_total === sum_of_eyes) {
      counter++;
    }
  }

  const probability = ((counter / times).toFixed(2))*100
  document.getElementById("guess").textContent = 'probability to get '+sum_of_eyes + ' by '+ dices+' dices is '+probability+' %';
}