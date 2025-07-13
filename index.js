const readline = require('readline');
const { calculateSum } = require('./sum');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.question('Gib die erste Zahl ein: ', (input1) => {
	rl.question('Gib die zweite Zahl ein: ', (input2) => {
		try {
			const summe = calculateSum(input1, input2);
			console.log(`Die Summe ist: ${summe}`);
		}
		catch (err) {
			console.log(err.message);
		}
		rl.close();
	});
});
