let student = {
  name: "Steven",
  age: 19,
  grades: [12, 14, 10],
  average: 0,
};

let moyenne = 0;
let nombreNotes = 0;

for (let i = 0; i < student.grades.length; i++) {
  moyenne += student.grades[i];
  nombreNotes++;
}

student.average = moyenne / nombreNotes;
console.log(`La moyenne de ${student.name} est de ${student.average} sur 20.`);
