let grades = [
    [20, 10],
    [15, 20],
    [13, 18]
];

let average = 0;
let totalGrades = 0;
let lengthGrades = 0;

for (let i=0 ; i<grades.length ; i++) {
    for (let j=0 ; j<grades[i].length ; j++) {
        totalGrades = totalGrades + grades[i][j];
        lengthGrades ++;
    }
}

average = totalGrades / lengthGrades;

console.log(`La moyenne est de ${average}`)