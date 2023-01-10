const redBtn = document.querySelector('#btn1')
const blueBtn = document.querySelector('.btn2')
const animationBtn = document.querySelector('.btn3')
const stopAnimationBtn = document.querySelector('.btn4')
const removeColorBtn = document.querySelector('.remove-color')
const square = document.querySelector('.color')
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

function startAnimation() {
	animationSquare.classList.add('animateDescriptor')
}

function stopAnimation() {
	animationSquare.classList.remove('animateDescriptor')
}

animationSquare.addEventListener('animationend', function () {
	animationSquare.classList.remove('animateDescriptor')
})

removeColorBtn.addEventListener('click', deleteColor)
redBtn.addEventListener('click', redColor)
blueBtn.addEventListener('click', blueColor)
animationBtn.addEventListener('click', startAnimation)
stopAnimationBtn.addEventListener('click', stopAnimation)
