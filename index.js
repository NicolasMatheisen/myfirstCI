// index.js

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Gib die erste Zahl ein: ', (input1) => {
  rl.question('Gib die zweite Zahl ein: ', (input2) => {
    const zahl1 = parseFloat(input1);
    const zahl2 = parseFloat(input2);

    if (isNaN(zahl1) || isNaN(zahl2)) {
      console.log('Bitte gültige Zahlen eingeben!');
    } else {
      const summe = zahl1 + zahl2;
      console.log(`Die Summe ist: ${summe}`);
    }

    rl.close();
  });
});
