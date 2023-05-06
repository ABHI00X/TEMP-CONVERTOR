function convertCtoF() {
	let celsius = document.getElementById("celsius").value;
	let fahrenheit = (celsius * 9/5) + 32;
	document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
	document.getElementById("result").innerHTML = `${celsius} &deg;C is equal to ${fahrenheit.toFixed(2)} &deg;F`;
}

function convertFtoC() {
	let fahrenheit = document.getElementById("fahrenheit").value;
	let celsius = (fahrenheit - 32) * 5/9;
	document.getElementById("celsius").value = celsius.toFixed(2);
	document.getElementById("result").innerHTML = `${fahrenheit} &deg;F is equal to ${celsius.toFixed(2)} &deg;C`;
}