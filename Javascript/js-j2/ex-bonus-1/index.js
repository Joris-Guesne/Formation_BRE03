let numbers = [
  -23, 42, 21, 90, 54, 362, -12, 57, 78, 84, 35, 546, 128, 7, 15, 65, 28,
];

let variableTemp = 0;

let newNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  console.log(`La variable à traiter est ${numbers[i]}`);
  if (numbers[i] > variableTemp) {
    newNumbers.push(numbers[i]);
  } else {
    newNumbers.unshift(numbers[i]);
  }
  variableTemp = numbers[i];
}

console.log(newNumbers);
