let ages = [23, 45, 67, 42, 23, 21, 41, 54, 45, 68, 48, 42];
let unique_ages = [];

for (let i = 0; i < ages.length; i++) {
  let ageUnique = true;
  for (let j = 0; j < unique_ages.length; j++) {
    if (ages[i] === unique_ages[j]) {
      ageUnique = false;
      break;
    }
  }
  if (ageUnique) {
    unique_ages.push(ages[i]);
  }
}

console.log(unique_ages);
