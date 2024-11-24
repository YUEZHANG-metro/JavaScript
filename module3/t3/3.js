'use strict';
const names = ['John', 'Paul', 'Jones'];
const listItem = document.getElementById("target")
let listHTML= '';

names.forEach((name) => {
  listHTML += `<li>${name}</li>`
})

listItem.innerHTML = listHTML;