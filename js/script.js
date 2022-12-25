const redBtn = document.querySelector('#btn1')
const blueBtn = document.querySelector('.btn2')
const square = document.querySelector('.color')
const removeColorBtn = document.querySelector('.remove-color')
const animationBtn = document.querySelector('.btn3')
const animationSquare = document.querySelector('.animsquare')

function redColor() {
	square.classList.add('red')
	square.classList.remove('blue')
}

function blueColor() {
	square.classList.add('blue')
	square.classList.remove('red')
}

function deleteColor() {
	square.classList.remove('blue')
	square.classList.remove('red')
}

function movingSquare() {
	animationSquare.classList.toggle('animsquare')
}

removeColorBtn.addEventListener('click', deleteColor)
redBtn.addEventListener('click', redColor)
blueBtn.addEventListener('click', blueColor)
animationBtn.addEventListener('click', movingSquare)
