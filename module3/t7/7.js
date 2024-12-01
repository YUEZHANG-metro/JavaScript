'use strict'

let hoverElement = document.querySelector('#trigger')
let imageElement = document.querySelector('#target')


hoverElement.addEventListener('mouseenter', () => {
  imageElement.src ="img/picB.jpg"
})

hoverElement.addEventListener('mouseleave', () => {
  imageElement.src ="img/picA.jpg"
})