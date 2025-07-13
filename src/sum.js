function calculateSum(input1, input2) {
	const zahl1 = parseFloat(input1);
	const zahl2 = parseFloat(input2);

	if (isNaN(zahl1) || isNaN(zahl2)) {
		throw new Error('Bitte gültige Zahlen eingeben!');
	}

	return zahl1 + zahl2;
}

module.exports = { calculateSum };
