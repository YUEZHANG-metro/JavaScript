'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];


const optionItem = document.getElementById("target")

students.forEach((student) => {
  const options = document.createElement('option')

  options.value = student.id
  options.textContent = student.name

  optionItem.appendChild(options);
  });