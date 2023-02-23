const img = document.querySelector('img')

img.setAttribute('src', 'https://unsplash.it/600/400')
img.setAttribute('alt', 'Losowy obrazek z internetu')

const test = () => {
	console.log('Przykładowy tekst')
}

setTimeout(test, 2000)
