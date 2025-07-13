const { calculateSum } = require('../src/sum');

describe('calculateSum', () => {
	test('summe zweier gültiger Zahlen', () => {
		expect(calculateSum('2', '3')).toBe(5);
		expect(calculateSum('2.5', '0.5')).toBeCloseTo(3.0);
	});

	test('führt zu Fehler bei einer ungültigen Zahl', () => {
		expect(() => calculateSum('abc', '2')).toThrow('Bitte gültige Zahlen eingeben!');
		expect(() => calculateSum('1', '')).toThrow('Bitte gültige Zahlen eingeben!');
	});
});
