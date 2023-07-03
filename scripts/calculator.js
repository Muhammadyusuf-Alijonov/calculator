let calculation = localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value) {
	calculation += value;
	displayCalculation();
	localStorage.setItem('calculation', calculation);
}

function calculate() {
	calculation = eval(calculation);
	displayCalculation();
	localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
	document.querySelector('.js-result').innerHTML = calculation;
}

function clearCalculation() {
	calculation = '';
	displayCalculation();
	localStorage.setItem('calculation', calculation);
}

