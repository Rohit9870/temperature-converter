function fahrenheit() {
	let cel = document.getElementById('cel').value;
	// console.log(cel);
	let fah = document.getElementById('fah').value;
	// console.log(fah);
	fah = (cel * 9/5) + 32;
	document.getElementById('fah').value = isDecimal(fah) ? fah.toFixed(1) : fah;
	// console.log(document.getElementById('fah').value);

}

function celsius() {
	let fah = document.getElementById('fah').value;
	// console.log(fah);
	let cel = document.getElementById('cel').value;
	cel = (fah - 32) * 5/9;
	document.getElementById('cel').value = isDecimal(cel) ? cel.toFixed(4) : cel;


}

function isDecimal(num) {
    return num % 1 !== 0;
}