const converter = document.querySelector('#converter')
const result = document.querySelector('.result')
const convBtn = document.querySelector('.conv')
const resetBtn = document.querySelector('.reset')
const changeBtn = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

let fahrenheit
let celcius

// T(°F) = T(°C) × 1,8 + 32
// T(°C) = (T(°F) - 32) / 1,8

const swap = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
		result.textContent = ''
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
		result.textContent = ''
	}
}

const fahrToCell = () => {
	fahrenheit = converter.value * 1.8 + 32
	result.textContent = `${converter.value}°F to ${fahrenheit.toFixed(1)}°C`
	converter.value = ''
}

const celToFahr = () => {
	celcius = (converter.value - 32) / 1.8
	result.textContent = `${converter.value}°C to ${celcius.toFixed(1)}°F`
	converter.value = ''
}

const conversion = () => {
	if (converter.value !== '') {
		if ((one.textContent = '°C')) {
			fahrToCell()
		} else {
			celToFahr()
		}
	} else {
		result.textContent = 'Musisz podać jakąś wartość'
	}
}
changeBtn.addEventListener('click', swap)
convBtn.addEventListener('click', conversion)
// convBtn.addEventListener("click", fahrToCell)
