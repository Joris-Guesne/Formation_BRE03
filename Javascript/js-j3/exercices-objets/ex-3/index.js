let students = [
  {
    name: "Steven",
    age: 18,
    average: 10,
  },
  {
    name: "Jessica",
    age: 20,
    average: 13,
  },
  {
    name: "Charlie",
    age: 17,
    average: 12,
  },
];

for (let i = 0; i < students.length; i++) {
  console.log(
    `Cet élève est ${students[i].name}, a ${students[i].age} ans et a une moyenne de ${students[i].average} sur 20.`
  );
}
