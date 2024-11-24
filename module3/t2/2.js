'use strict'

const listItem = document.getElementById("target")

const firstItem = document.createElement('li');
firstItem.textContent = 'First item';
listItem.appendChild(firstItem);

const secondItem = document.createElement('li');
secondItem.textContent = 'Second item'
listItem.appendChild(secondItem)
secondItem.classList.add('my-item')

const thirdItem = document.createElement('li');
thirdItem.textContent = 'Third item';
listItem.appendChild(thirdItem);