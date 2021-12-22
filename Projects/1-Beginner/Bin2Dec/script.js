function bin2dec() {
	let texto = document.getElementById('bin2dec').value;

	//verify for valid binary
	verifyBinary(texto);

	//normalize the binary adding 0's
	texto = fillText(texto);

	//convert to binary
	let converted = convert(texto);

	//modify DOM element
	document.getElementById('result').innerHTML = converted;
}

function convert(texto) {
	let dec = 0;
	for (let i = 0; i < texto.length; i++) {
		if (texto[texto.length - 1 - i] == 1) {
			dec += Math.pow(2, i);
		}
	}
	return dec;
}

function fillText(texto) {
	//First, reverse string
	texto = reverseText(texto);

	//After, fill the string with 0's
	while (texto.length < 8) {
		texto += '0';
	}

	//and reverse it back
	return reverseText(texto);
}

function reverseText(texto) {
	let aux = '';
	for (let i = texto.length - 1; i >= 0; i--) {
		aux += texto[i];
	}
	return aux;
}

function verifyBinary(texto) {
	for (t of texto) {
		if (t != 1 && t != 0) {
			alert('Formato de texto inválido. Utilize apenas valores binários.');
			break;
		}
	}
}
