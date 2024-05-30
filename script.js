function fahrenheit() {


	let cel = document.getElementById('cel').value;
	if (cel == ''){
		document.getElementById('fah').value='';
	}else{
		// console.log(cel);
		let fah = document.getElementById('fah').value;
		fah = (cel * 9/5) + 32;
		document.getElementById('fah').value = isDecimal(fah) ? fah.toFixed(1) : fah;

	}

}

function celsius() {
	let fah = document.getElementById('fah').value;
	if (fah == ''){
		document.getElementById('cel').value = '';
	}else{
		let cel = document.getElementById('cel').value;
		cel = (fah - 32) * 5/9;
		document.getElementById('cel').value = isDecimal(cel) ? cel.toFixed(4) : cel;
	}

}

function isDecimal(num) {
    return num % 1 !== 0;
}