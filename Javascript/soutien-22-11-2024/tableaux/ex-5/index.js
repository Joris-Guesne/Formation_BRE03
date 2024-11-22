let grades = [
  [12, 11, 18],
  [13, 17, 9],
  [10, 15, 8],
  [14, 18, 13],
];

let moyennes = [];

for (let i = 0; i < grades.length; i++) {
  let sum = 0;
  for (let j = 0; j < grades[i].length; j++) {
    sum += grades[i][j];
  }
  let moyenne = sum / grades[i].length;
  moyennes.push(moyenne);
}

console.log(moyennes);
